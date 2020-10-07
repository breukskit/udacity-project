import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faBars,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { PROGRAMMING_AND_DEVELOPMENT, CAREERS, ENTERPRISE } from './menus';
import { Store, select } from '@ngrx/store';
import { State } from '../../../store/reducers';
import { selectSize } from '../../../store/selectors';
import { Subscription } from 'rxjs';

import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        animate(
          '200ms ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-90%)', offset: 0 }),
            style({
              opacity: 0.75,
              transform: 'translateX(-50%)',
              offset: 0.5,
            }),
            style({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-out',
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({
              opacity: 0.75,
              transform: 'translateX(-50%)',
              offset: 0.5,
            }),
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class NavComponent implements OnInit, OnDestroy {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faBars = faBars;

  showProgramsDropdown = false;
  showCareersDropdown = false;
  showEnterpriseDropdown = false;
  showBurgerSidenav = false;

  viewport$: Subscription;
  viewport;

  toggleBurgerSidenav() {
    this.showBurgerSidenav = !this.showBurgerSidenav;
  }
  toggleProgramsDropDown() {
    this.showCareersDropdown = false;
    this.showEnterpriseDropdown = false;
    this.showProgramsDropdown = !this.showProgramsDropdown;
  }
  toggleCareersDropDown() {
    this.showProgramsDropdown = false;
    this.showEnterpriseDropdown = false;
    this.showCareersDropdown = !this.showCareersDropdown;
  }
  toggleEnterpriseDropDown() {
    this.showProgramsDropdown = false;
    this.showCareersDropdown = false;
    this.showEnterpriseDropdown = !this.showEnterpriseDropdown;
  }
  closeMenus() {
    this.showProgramsDropdown = false;
    this.showCareersDropdown = false;
    this.showEnterpriseDropdown = false;
    this.showBurgerSidenav = false;
  }
  constructor(private store: Store<State>) {}

  programmingAndDevelopment = PROGRAMMING_AND_DEVELOPMENT;
  careers = CAREERS;
  enterprises = ENTERPRISE;

  ngOnInit(): void {
    this.viewport$ = this.store
      .pipe(select(selectSize))
      .subscribe((x) => (this.viewport = x));
  }
  ngOnDestroy(): void {
    this.viewport$.unsubscribe();
  }
}
