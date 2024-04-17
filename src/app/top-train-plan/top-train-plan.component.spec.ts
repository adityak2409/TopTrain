import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrainPlanComponent } from './top-train-plan.component';

describe('TopTrainPlanComponent', () => {
  let component: TopTrainPlanComponent;
  let fixture: ComponentFixture<TopTrainPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTrainPlanComponent]
    });
    fixture = TestBed.createComponent(TopTrainPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
