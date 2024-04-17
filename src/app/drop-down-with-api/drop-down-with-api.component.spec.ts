import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownWithAPIComponent } from './drop-down-with-api.component';

describe('DropDownWithAPIComponent', () => {
  let component: DropDownWithAPIComponent;
  let fixture: ComponentFixture<DropDownWithAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownWithAPIComponent]
    });
    fixture = TestBed.createComponent(DropDownWithAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
