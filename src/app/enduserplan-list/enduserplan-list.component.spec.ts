import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduserplanListComponent } from './enduserplan-list.component';

describe('EnduserplanListComponent', () => {
  let component: EnduserplanListComponent;
  let fixture: ComponentFixture<EnduserplanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnduserplanListComponent]
    });
    fixture = TestBed.createComponent(EnduserplanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
