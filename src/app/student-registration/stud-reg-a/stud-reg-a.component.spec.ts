import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudRegAComponent } from './stud-reg-a.component';

describe('StudRegAComponent', () => {
  let component: StudRegAComponent;
  let fixture: ComponentFixture<StudRegAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudRegAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudRegAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
