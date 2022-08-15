import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalDateComponent } from './interval-date.component';

describe('IntervalDateComponent', () => {
  let component: IntervalDateComponent;
  let fixture: ComponentFixture<IntervalDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
