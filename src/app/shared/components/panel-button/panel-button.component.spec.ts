import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelButtonComponent } from './panel-button.component';

describe('PanelButtonComponent', () => {
  let component: PanelButtonComponent;
  let fixture: ComponentFixture<PanelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
