import { join, resolve } from 'path';

import { workspaceRoot } from '@nx/devkit';
import { readFileSync } from 'fs';

export function getProjectRoot(project: {root: string}) {
  return resolve(workspaceRoot, project.root);
}

export function getProjectFilePath(
  project: {root: string},
  relativeFile: string
) {
  return join(getProjectRoot(project), ...relativeFile.split(/[/\\]/));
}

export function getProjectFileContent(
  project: {root: string},
  relativeFile: string
) {
  const filePath = getProjectFilePath(project, relativeFile);
  return readFileSync(filePath, 'utf8');
}
