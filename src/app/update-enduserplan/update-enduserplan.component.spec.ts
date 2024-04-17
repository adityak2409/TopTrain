import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnduserplanComponent } from './update-enduserplan.component';

describe('UpdateEnduserplanComponent', () => {
  let component: UpdateEnduserplanComponent;
  let fixture: ComponentFixture<UpdateEnduserplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEnduserplanComponent]
    });
    fixture = TestBed.createComponent(UpdateEnduserplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
