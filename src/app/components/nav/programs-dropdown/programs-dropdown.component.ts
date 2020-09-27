import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-programs-dropdown',
  templateUrl: './programs-dropdown.component.html',
  styleUrls: ['./programs-dropdown.component.scss'],
})
export class ProgramsDropdownComponent implements OnInit {
  // @Output() closeEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // closeMenu() {
  //   this.closeEvent.emit();
  // }
}
