import { Component, OnInit } from '@angular/core';

import { ViewportService } from '../../../services/viewport.service';

import { Store } from '@ngrx/store';
import { State } from '../../../store/reducers';
import { setViewport } from '../../../store/actions';

@Component({
  selector: 'app-viewport',
  template: '',
  styleUrls: [],
})
export class ViewportComponent implements OnInit {
  constructor(
    private _viewportService: ViewportService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this._viewportService.xsViewport().subscribe(({ matches }) => {
      if (matches) {
        this.store.dispatch(setViewport({ size: 'xs' }));
      }
    });
    this._viewportService.smallViewport().subscribe(({ matches }) => {
      if (matches) {
        this.store.dispatch(setViewport({ size: 'small' }));
      }
    });
    this._viewportService.mediumViewport().subscribe(({ matches }) => {
      if (matches) {
        this.store.dispatch(setViewport({ size: 'medium' }));
      }
    });
    this._viewportService.largeViewport().subscribe(({ matches }) => {
      if (matches) {
        this.store.dispatch(setViewport({ size: 'large' }));
      }
    });
    this._viewportService.xlViewport().subscribe(({ matches }) => {
      if (matches) {
        this.store.dispatch(setViewport({ size: 'xl' }));
      }
    });
  }
}
