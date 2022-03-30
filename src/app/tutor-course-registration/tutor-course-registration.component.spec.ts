import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorCourseRegistrationComponent } from './tutor-course-registration.component';

describe('TutorCourseRegistrationComponent', () => {
  let component: TutorCourseRegistrationComponent;
  let fixture: ComponentFixture<TutorCourseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorCourseRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorCourseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
