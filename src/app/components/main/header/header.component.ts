import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../../../store/reducers';
import { selectSize } from '../../../../store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  viewport$: Observable<string>;
  viewport = '';
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.viewport$ = this.store.pipe(select(selectSize));
    this.viewport$.subscribe((value) => (this.viewport = value));
  }
}
