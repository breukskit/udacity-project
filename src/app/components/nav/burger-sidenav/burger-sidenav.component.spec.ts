import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerSidenavComponent } from './burger-sidenav.component';

describe('BurgerSidenavComponent', () => {
  let component: BurgerSidenavComponent;
  let fixture: ComponentFixture<BurgerSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
