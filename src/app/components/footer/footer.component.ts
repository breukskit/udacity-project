import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  featuredPrograms = FEATURED_PROGRAMS;
  onlyAtUdacity = ONLY_AT_UDACITY;
  udacitySchools = UDACITY_SCHOOLS;
  resources = RESOURCES;
  programs = PROGRAMS;
  company = COMPANY;
  enterprise = ENTERPRISE;
  support = SUPPORT;

  ngOnInit(): void {}
}
