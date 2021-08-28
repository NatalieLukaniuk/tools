import { Action, createReducer, on } from '@ngrx/store';
import * as catsActions from '../store/cats.actions';

export interface CatsState {
  origin: string;
  name: string;
  description: string
}

export const initialState: CatsState = {
  origin: '',
  name: '',
  description: ''
};

const catsReducer = createReducer(
  initialState,
  on(catsActions.dataLoadCompleted, (state, action) => ({
    ...state,
    origin: action.origin,
    description: action.description,
    name: action.name
  })),
  on(catsActions.dataLoadFailed, (state, action) => ({
    ...state,
    error: action.error
  }))
);

export function reducer(state: CatsState | undefined, action: Action): any {
  return catsReducer(state, action);
}

