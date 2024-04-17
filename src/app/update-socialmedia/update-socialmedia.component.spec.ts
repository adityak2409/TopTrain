import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSocialmediaComponent } from './update-socialmedia.component';

describe('UpdateSocialmediaComponent', () => {
  let component: UpdateSocialmediaComponent;
  let fixture: ComponentFixture<UpdateSocialmediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSocialmediaComponent]
    });
    fixture = TestBed.createComponent(UpdateSocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
