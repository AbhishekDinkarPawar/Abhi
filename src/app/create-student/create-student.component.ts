import { Component } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  studentObj = {
    name : '',
    contact : '',
    city : 'Nagpur',
    state : '',
    country : '',
    address : '',
    isIndian : true,
    gender : '',
  }

  constructor(){

  }
  onSaveStudent(){
    const formdata = this.studentObj;
  }
}
