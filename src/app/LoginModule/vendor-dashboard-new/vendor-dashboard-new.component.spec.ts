import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardNewComponent } from './vendor-dashboard-new.component';

describe('VendorDashboardNewComponent', () => {
  let component: VendorDashboardNewComponent;
  let fixture: ComponentFixture<VendorDashboardNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorDashboardNewComponent]
    });
    fixture = TestBed.createComponent(VendorDashboardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
