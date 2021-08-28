import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Task: {}
};

const pluralNames = { Task: 'Tasks' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
