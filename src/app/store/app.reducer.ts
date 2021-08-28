import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUI from './ui.reducer';
import * as fromCats from '../playground/components/cats/store/cats.reducers';

export interface State {
    ui: fromUI.State;
    cats: fromCats.CatsState;
  }

export const reducers: ActionReducerMap<State> = {
  ui: fromUI.uiReducer,
  cats: fromCats.reducer
};

export const getUiState = createFeatureSelector<fromUI.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUI.getLoading);
