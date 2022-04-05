import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudRegBComponent } from './stud-reg-b.component';

describe('StudRegBComponent', () => {
  let component: StudRegBComponent;
  let fixture: ComponentFixture<StudRegBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudRegBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudRegBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
