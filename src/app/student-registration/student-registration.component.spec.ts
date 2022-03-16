import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistrationComponent } from './student-registration.component';

describe('StudentRegistrationComponent', () => {
  let component: StudentRegistrationComponent;
  let fixture: ComponentFixture<StudentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
