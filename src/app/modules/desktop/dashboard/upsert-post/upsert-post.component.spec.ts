import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertPostComponent } from './upsert-post.component';

describe('UpsertPostComponent', () => {
  let component: UpsertPostComponent;
  let fixture: ComponentFixture<UpsertPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsertPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
