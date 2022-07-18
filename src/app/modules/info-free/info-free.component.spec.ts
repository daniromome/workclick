import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFreeComponent } from './info-free.component';

describe('InfoFreeComponent', () => {
  let component: InfoFreeComponent;
  let fixture: ComponentFixture<InfoFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
