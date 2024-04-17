import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnduserplanComponent } from './add-enduserplan.component';

describe('AddEnduserplanComponent', () => {
  let component: AddEnduserplanComponent;
  let fixture: ComponentFixture<AddEnduserplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEnduserplanComponent]
    });
    fixture = TestBed.createComponent(AddEnduserplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
