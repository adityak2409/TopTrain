import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedCourseListComponent } from './applied-course-list.component';

describe('AppliedCourseListComponent', () => {
  let component: AppliedCourseListComponent;
  let fixture: ComponentFixture<AppliedCourseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedCourseListComponent]
    });
    fixture = TestBed.createComponent(AppliedCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
