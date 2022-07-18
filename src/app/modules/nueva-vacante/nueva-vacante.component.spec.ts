import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaVacanteComponent } from './nueva-vacante.component';

describe('NuevaVacanteComponent', () => {
  let component: NuevaVacanteComponent;
  let fixture: ComponentFixture<NuevaVacanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaVacanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaVacanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
