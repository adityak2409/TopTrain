import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationtrackerComponent } from './add-applicationtracker.component';

describe('AddApplicationtrackerComponent', () => {
  let component: AddApplicationtrackerComponent;
  let fixture: ComponentFixture<AddApplicationtrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddApplicationtrackerComponent]
    });
    fixture = TestBed.createComponent(AddApplicationtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
