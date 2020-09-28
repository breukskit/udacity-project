import { createSelector } from '@ngrx/store';
import { State, IViewportState } from './reducers';

export const selectViewport = (state: State) => state.viewport;

export const selectSize = createSelector(
  selectViewport,
  (state: IViewportState) => state.size
);
