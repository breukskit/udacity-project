import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import {
  faCaretLeft,
  faCaretRight,
  faStar,
  faStarHalfAlt,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { State } from '../../../../store/reducers';
import { selectSize } from '../../../../store/selectors';
import { Observable } from 'rxjs';
import {
  CHOICES,
  DATA_SCIENCE,
  PROGRAMMING,
  ARTIFICIAL_INTELLIGENCE,
  BUSINESS,
  AUTONOMOUS_VEHICLES,
  CLOUD_COMPUTING_CAROUSEL,
} from './carousel-choices';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;

  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  faPlus = faPlus;
  faMinus = faMinus;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  viewPort$: Observable<string>;
  viewport = '';

  handleViewport() {
    this.viewPort$.subscribe((size) => (this.viewport = size));
  }

  carouselChoice = 'DATA_SCIENCE';

  setCarousel(choice: { id: string; title: string }) {
    this.carouselChoice = choice.id;
    console.log(this.carouselChoice);
  }
  mobileSetCarousel(choice: string) {
    if (this.carouselChoice === choice) {
      this.carouselChoice = '';
    } else {
      this.carouselChoice = choice;
    }
  }

  constructor(private store: Store<State>) {}

  choices = CHOICES;
  dataScience = DATA_SCIENCE;
  programming = PROGRAMMING;
  artificialIntelligence = ARTIFICIAL_INTELLIGENCE;
  business = BUSINESS;
  autonomousVehicles = AUTONOMOUS_VEHICLES;
  cloudComputing = CLOUD_COMPUTING_CAROUSEL;

  ngOnInit(): void {
    this.viewPort$ = this.store.pipe(select(selectSize));
    this.handleViewport();
  }
}
