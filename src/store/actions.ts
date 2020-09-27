import { createAction, props } from '@ngrx/store';

export const setViewport = createAction(
  '[viewport] setViewport',
  props<{ size: string }>()
);
