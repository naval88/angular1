import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAlertComponent } from './employee-alert.component';

describe('EmployeeAlertComponent', () => {
  let component: EmployeeAlertComponent;
  let fixture: ComponentFixture<EmployeeAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
