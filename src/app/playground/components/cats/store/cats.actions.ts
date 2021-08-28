import { createAction, props } from '@ngrx/store';

export const dataLoadStarted = createAction('[Cats] Data Load Started');
export const dataLoadCompleted = createAction('[Cats] Data Load Completed', props<{origin: string, description: string, name: string}>());
export const dataLoadFailed = createAction('[Cats] Data Load Failed', props<{error: Error}>());
