import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationtrackerListComponent } from './applicationtracker-list.component';

describe('ApplicationtrackerListComponent', () => {
  let component: ApplicationtrackerListComponent;
  let fixture: ComponentFixture<ApplicationtrackerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationtrackerListComponent]
    });
    fixture = TestBed.createComponent(ApplicationtrackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
