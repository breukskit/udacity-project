import { Component, OnInit } from '@angular/core';
import {
  PROGRAMMING_AND_DEVELOPMENT,
  ARTIFICIAL_INTELLIGENCE,
  CLOUD_COMPUTING,
  DATA_SCIENCE,
  BUSINESS,
  AUTONOMOUS_SYSTEMS,
} from '../menus';

@Component({
  selector: 'app-programs-dropdown',
  templateUrl: './programs-dropdown.component.html',
  styleUrls: ['./programs-dropdown.component.scss'],
})
export class ProgramsDropdownComponent implements OnInit {
  constructor() {}

  programs = PROGRAMMING_AND_DEVELOPMENT;
  artificialIntelligence = ARTIFICIAL_INTELLIGENCE;
  cloudComputing = CLOUD_COMPUTING;
  dataScience = DATA_SCIENCE;
  business = BUSINESS;
  autonomousSystems = AUTONOMOUS_SYSTEMS;

  ngOnInit(): void {}
}
