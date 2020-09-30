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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faBars = faBars;

  showProgramsDropdown = false;
  showCareersDropdown = false;
  showEnterpriseDropdown = false;
  showBurgerSidenav = false;

  viewport$: Observable<string>;
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
    this.viewport$ = this.store.pipe(select(selectSize));
    this.viewport$.subscribe((value) => (this.viewport = value));
  }
  ngOnDestroy(): void {
    this.viewport$.subscribe().unsubscribe();
  }
}
