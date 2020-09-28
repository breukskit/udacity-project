import { Component, OnInit } from '@angular/core';
import { PROGRAMMING_AND_DEVELOPMENT, ARTIFICIAL_INTELLIGENCE } from '../menus';

@Component({
  selector: 'app-programs-dropdown',
  templateUrl: './programs-dropdown.component.html',
  styleUrls: ['./programs-dropdown.component.scss'],
})
export class ProgramsDropdownComponent implements OnInit {
  menuTarget = '';
  constructor() {}

  over(target: string) {
    this.menuTarget = target;
  }
  out() {
    this.menuTarget = '';
  }

  programs = PROGRAMMING_AND_DEVELOPMENT;
  artificialIntelligence = ARTIFICIAL_INTELLIGENCE;

  ngOnInit(): void {}
}
