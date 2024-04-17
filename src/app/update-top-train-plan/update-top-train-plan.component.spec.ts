import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTopTrainPlanComponent } from './update-top-train-plan.component';

describe('UpdateTopTrainPlanComponent', () => {
  let component: UpdateTopTrainPlanComponent;
  let fixture: ComponentFixture<UpdateTopTrainPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTopTrainPlanComponent]
    });
    fixture = TestBed.createComponent(UpdateTopTrainPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
