import { createReducer, Action, on } from '@ngrx/store';
import { setViewport } from './actions';

export interface State {
  viewport: IViewportState;
}

export interface IViewportState {
  size: string;
}

const getViewport = () => {
  if (window.innerWidth < 576) {
    return 'xs';
  } else if (window.innerWidth > 575 && window.innerWidth < 768) {
    return 'small';
  } else if (window.innerWidth > 767 && window.innerWidth < 992) {
    return 'medium';
  } else if (window.innerWidth > 991 && window.innerWidth < 1200) {
    return 'large';
  } else {
    return 'xl';
  }
};

export const defaultState: IViewportState = {
  size: getViewport(),
};

const _viewportReducer = createReducer(
  defaultState,
  on(setViewport, (state, props) => ({ ...state, size: props.size }))
);

export function viewportReducer(state: IViewportState, action: Action) {
  return _viewportReducer(state, action);
}
