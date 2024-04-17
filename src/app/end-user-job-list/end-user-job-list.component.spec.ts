import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserJobListComponent } from './end-user-job-list.component';

describe('EndUserJobListComponent', () => {
  let component: EndUserJobListComponent;
  let fixture: ComponentFixture<EndUserJobListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndUserJobListComponent]
    });
    fixture = TestBed.createComponent(EndUserJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
