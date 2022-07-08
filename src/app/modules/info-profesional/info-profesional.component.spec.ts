import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProfesionalComponent } from './info-profesional.component';

describe('InfoProfesionalComponent', () => {
  let component: InfoProfesionalComponent;
  let fixture: ComponentFixture<InfoProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoProfesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
