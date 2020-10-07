import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FEATURED_PROGRAMS,
  ONLY_AT_UDACITY,
  UDACITY_SCHOOLS,
  RESOURCES,
  PROGRAMS,
  COMPANY,
  ENTERPRISE,
  SUPPORT,
} from './Lists';
import { State } from '../../../store/reducers';
import { selectSize } from '../../../store/selectors';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'hidden',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'shown',
        style({
          overflow: 'hidden',
        })
      ),
      transition('hidden<=>shown', animate('250ms')),
    ]),
    trigger('openClose', [
      state(
        'closed',
        style({
          transform: 'rotate(0deg)',
          color: '#C1C5C9',
          stroke: '#C1C5C9',
        })
      ),
      state(
        'open',
        style({
          transform: 'rotate(45deg)',
          color: '#2E3D49',
          stroke: '#2E3D49',
        })
      ),
      transition('closed<=>open', animate('250ms')),
    ]),
  ],
})
export class FooterComponent implements OnInit, OnDestroy {
  sub: Subscription;
  viewPort: string;

  faPlus = faPlus;
  toggleMenus(menu: string) {
    this.menus.forEach((item) => {
      if (item.id === menu) {
        item.show = !item.show;
      }
    });
  }

  menus = [
    { show: false, id: 'featuredPrograms' },
    { show: false, id: 'onlyAtUdacity' },
    { show: false, id: 'udacitySchools' },
    { show: false, id: 'resources' },
    { show: false, id: 'programs' },
    { show: false, id: 'company' },
    { show: false, id: 'enterprise' },
    { show: false, id: 'support' },
  ];

  constructor(private store: Store<State>) {}

  featuredPrograms = FEATURED_PROGRAMS;
  onlyAtUdacity = ONLY_AT_UDACITY;
  udacitySchools = UDACITY_SCHOOLS;
  resources = RESOURCES;
  programs = PROGRAMS;
  company = COMPANY;
  enterprise = ENTERPRISE;
  support = SUPPORT;

  ngOnInit(): void {
    this.sub = this.store
      .pipe(select(selectSize))
      .subscribe((x) => (this.viewPort = x));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
