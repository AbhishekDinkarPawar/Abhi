import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  fisrtName : string = 'Abhishek';
  rollNo : number = 1122;
  todaysDate: Date = new Date( );
  isIndian: boolean = false;
  text: string = '';
  minValue: Date = new Date()

  //way 1 - declaration
  cousreName:string;
  //way 2 -declaration+intilization
  cousreDuration:string = '3 Months'
  //way3 - intilization
  cousreCandidates = 35
  student: any;
  studentObject:any = {
    name: 'demo',
    course: 'angular',
    duration: '3 Months',
  }

  cityArray: string []= ['pune', 'solapur','mumbai']
  rollNoList: number[];
  constructor(){
    this.student = new Date();
    this.rollNoList = [11,12,13,14]
    this.cousreName = "Angular"
    this.fisrtName = "demo 2"
   }
}
