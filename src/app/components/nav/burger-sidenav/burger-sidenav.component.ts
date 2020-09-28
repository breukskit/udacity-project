import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  faTimes,
  faCaretRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { PROGRAMMING, CAREERS, ENTERPRISE } from '../menus';

@Component({
  selector: 'app-burger-sidenav',
  templateUrl: './burger-sidenav.component.html',
  styleUrls: ['./burger-sidenav.component.scss'],
})
export class BurgerSidenavComponent implements OnInit {
  faTimes = faTimes;
  faCaretRight = faCaretRight;
  faArrowLeft = faArrowLeft;

  roomInSidenav = 'groundZero';

  setRoomInSidenav(room: string) {
    this.roomInSidenav = room;
  }

  @Output() closeEvent = new EventEmitter();

  closeBurgerMenu() {
    this.closeEvent.emit();
  }

  constructor() {}

  programs = PROGRAMMING;
  careers = CAREERS;
  enterprises = ENTERPRISE;

  ngOnInit(): void {}
}
