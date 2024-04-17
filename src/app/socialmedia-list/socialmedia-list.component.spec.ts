import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaListComponent } from './socialmedia-list.component';

describe('SocialmediaListComponent', () => {
  let component: SocialmediaListComponent;
  let fixture: ComponentFixture<SocialmediaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialmediaListComponent]
    });
    fixture = TestBed.createComponent(SocialmediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
