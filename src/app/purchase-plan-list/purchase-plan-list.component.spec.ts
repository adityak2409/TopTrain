import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePlanListComponent } from './purchase-plan-list.component';

describe('PurchasePlanListComponent', () => {
  let component: PurchasePlanListComponent;
  let fixture: ComponentFixture<PurchasePlanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasePlanListComponent]
    });
    fixture = TestBed.createComponent(PurchasePlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
