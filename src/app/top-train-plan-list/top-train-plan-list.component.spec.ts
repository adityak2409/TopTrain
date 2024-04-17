import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrainPlanListComponent } from './top-train-plan-list.component';

describe('TopTrainPlanListComponent', () => {
  let component: TopTrainPlanListComponent;
  let fixture: ComponentFixture<TopTrainPlanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTrainPlanListComponent]
    });
    fixture = TestBed.createComponent(TopTrainPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
