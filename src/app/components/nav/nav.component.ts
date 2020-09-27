import { Component, OnInit, Input } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const PROGRAMMING_AND_DEVELOPMENT = [
  'RPA Developer with UiPath',
  'Agile Software Development',
  'Introduction to Cybersecurity',
  'Intermediate JavaScript',
  'Java Web Developer',
  'Introduction to Programming',
  'iOS Developer',
  'Full Stack Web Developer',
  'React',
  'Data Engineer',
  'Blockchain Developer',
  'C++',
  'Data Structures and Algorithms',
  'Android Developer',
  'Android Basics',
  'AWS Cloud Architect',
  'Cloud Developer',
];

interface IMenu {
  name: string;
  isVisible: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  showProgramsDropdown = false;
  showCareersDropdown = false;
  showEnterpriseDropdown = false;

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
  closeDropdowns() {
    this.showProgramsDropdown = false;
    this.showCareersDropdown = false;
    this.showEnterpriseDropdown = false;
  }
  constructor() {}

  programmingAndDevelopment = PROGRAMMING_AND_DEVELOPMENT;

  ngOnInit(): void {}
}
