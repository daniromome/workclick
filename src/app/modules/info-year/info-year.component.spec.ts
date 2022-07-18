import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoYearComponent } from './info-year.component';

describe('InfoYearComponent', () => {
  let component: InfoYearComponent;
  let fixture: ComponentFixture<InfoYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
