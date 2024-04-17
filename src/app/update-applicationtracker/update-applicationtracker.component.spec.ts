import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplicationtrackerComponent } from './update-applicationtracker.component';

describe('UpdateApplicationtrackerComponent', () => {
  let component: UpdateApplicationtrackerComponent;
  let fixture: ComponentFixture<UpdateApplicationtrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateApplicationtrackerComponent]
    });
    fixture = TestBed.createComponent(UpdateApplicationtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
