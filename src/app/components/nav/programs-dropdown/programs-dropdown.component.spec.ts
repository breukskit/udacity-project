import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsDropdownComponent } from './programs-dropdown.component';

describe('ProgramsDropdownComponent', () => {
  let component: ProgramsDropdownComponent;
  let fixture: ComponentFixture<ProgramsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
