import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitCardsComponent } from './benefit-cards.component';

describe('BenefitCardsComponent', () => {
  let component: BenefitCardsComponent;
  let fixture: ComponentFixture<BenefitCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
