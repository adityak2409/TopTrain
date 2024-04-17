import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserDashboardComponent } from './end-user-dashboard.component';

describe('EndUserDashboardComponent', () => {
  let component: EndUserDashboardComponent;
  let fixture: ComponentFixture<EndUserDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndUserDashboardComponent]
    });
    fixture = TestBed.createComponent(EndUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
