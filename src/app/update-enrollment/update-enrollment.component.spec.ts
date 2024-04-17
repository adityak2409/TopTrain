import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnrollmentComponent } from './update-enrollment.component';

describe('UpdateEnrollmentComponent', () => {
  let component: UpdateEnrollmentComponent;
  let fixture: ComponentFixture<UpdateEnrollmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEnrollmentComponent]
    });
    fixture = TestBed.createComponent(UpdateEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
