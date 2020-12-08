import { Component, Input, OnInit } from '@angular/core';import { Student } from './student.model';
7

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student!: Student;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
