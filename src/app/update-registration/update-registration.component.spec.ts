import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegistrationComponent } from './update-registration.component';

describe('UpdateRegistrationComponent', () => {
  let component: UpdateRegistrationComponent;
  let fixture: ComponentFixture<UpdateRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRegistrationComponent]
    });
    fixture = TestBed.createComponent(UpdateRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
