import { Student } from './student/student.model';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jad works!';

  jediArray: Student[] = [
    {
      name: 'Luke',
      isJedi: true,
      temple: 'Coruscant'
    },
    {
      name: 'Leia',
      isJedi: false
    },
    {
      name: 'Han Solo',
      isJedi: false
    }
  ]

  addJedi(student: Student): void {
    this.jediArray.push(student);
  }

  delete(student: Student): void {
    this.jediArray.splice(this.jediArray.indexOf(student), 1);
  }
}
