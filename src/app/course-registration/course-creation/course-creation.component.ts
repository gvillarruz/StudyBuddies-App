import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-creation',
  templateUrl: './course-creation.component.html',
  styleUrls: ['./course-creation.component.scss'],
})
export class CourseCreationComponent implements OnInit {
  isPaid;
  isOnline;
  isGroup;
  selectedGrade;
  gradeOptions = [
    { name: 'Grade 1', value: 1 },
    { name: 'Grade 2', value: 2 },
    { name: 'Grade 3', value: 3 },
    { name: 'Grade 4', value: 4 },
    { name: 'Grade 5', value: 5 },
    { name: 'Grade 6', value: 6 },
    { name: 'Grade 7', value: 7 },
    { name: 'Grade 8', value: 8 },
    { name: 'Grade 9', value: 9 },
    { name: 'Grade 10', value: 10 },
    { name: 'Grade 11', value: 11 },
    { name: 'Grade 12', value: 12 },
  ];
  subjectOptions = [
    { name: 'Math', value: 'math' },
    { name: 'Science', value: 'science' },
    { name: 'English', value: 'english' },
    { name: 'History', value: 'history' },
    { name: 'Geography', value: 'geography' },
    { name: 'French', value: 'french' },
  ];
  selectedSubject;

  proficienyOptions = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5', value: '5' },
    { name: '6', value: '6' },
    { name: '7', value: '7' },
    { name: '8', value: '8' },
    { name: '9', value: '9' },
    { name: '10', value: '10' },
  ];
  selectedProficiency;

  constructor() {}

  ngOnInit(): void {}
}
