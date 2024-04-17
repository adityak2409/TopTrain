import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePurchasePlanListComponent } from './update-purchase-plan-list.component';

describe('UpdatePurchasePlanListComponent', () => {
  let component: UpdatePurchasePlanListComponent;
  let fixture: ComponentFixture<UpdatePurchasePlanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePurchasePlanListComponent]
    });
    fixture = TestBed.createComponent(UpdatePurchasePlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
