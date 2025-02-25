import { Tree, addProjectConfiguration, joinPathFragments, logger } from '@nx/devkit';
import { NormalizedSchema } from '../schema';
import { NX_QUARKUS_PKG } from '../../../index';
import {
  BuilderCommandAliasType,
} from '@nxrocks/common-jvm';

export async function generateProjectConfiguration(
  tree: Tree,
  options: NormalizedSchema
): Promise<void> {

  logger.info(
    `⚙️ Generating project configuration...`
  );

  const commands: BuilderCommandAliasType[] = [
    'build',
    'install',
    'test',
    'clean',
  ];

  if (!options.skipFormat) {
    commands.push('format', 'apply-format', 'check-format');
  }

  const parentModuleCommands = [...commands];

  const appOnlyCommands = [ 
  'dev',
  'serve',
  'remote-dev',
  'package',
  'add-extension',
  'list-extensions',
  ];
  if (options.projectType === 'application') {
    //only 'application' projects should have 'quarkus' related commands
    commands.push(...appOnlyCommands);
  }

  const getTargets = (commands: string[], rootFolder:string, runFromParentModule?:boolean) => {
    const targets = {};
    for (const command of commands) {
      targets[command] = {
        executor: `${NX_QUARKUS_PKG}:${command}`,
        options: {
          root: rootFolder,
          ...(runFromParentModule? { runFromParentModule } : {}),
        },
        ...(['build', 'install', 'dev', 'remote-dev', 'serve'].includes(command) ? { dependsOn: ['^install'] } : {}),
        ...(['build', 'install', 'test'].includes(command)
          ? {
              outputs: [
                joinPathFragments('{workspaceRoot}', rootFolder,  options.buildSystem === 'MAVEN' ? 'target' : 'build')
              ],
            }
          : {}),
      };
    }
    return targets;
  }

  if(options.transformIntoMultiModule){

    addProjectConfiguration(tree, options.parentModuleName, {
      root: options.moduleRoot,
      sourceRoot: `${options.moduleRoot}`,
      projectType: options.projectType,
      targets: getTargets(parentModuleCommands, options.moduleRoot, false),
      tags: options.parsedTags,
    });
  }

  addProjectConfiguration(tree, options.projectName, {
    root: options.projectRoot,
    sourceRoot: joinPathFragments(options.projectRoot, 'src'),
    projectType: options.projectType,
    targets: getTargets(commands, options.projectRoot, !options.keepProjectLevelWrapper),
    tags: options.parsedTags,
  });
}
