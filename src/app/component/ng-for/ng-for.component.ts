import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  cityList:string[ ] = ['Mumbai','pune ','Solapur','delhi']
rollNoArray:number[ ]= [];

selectedStudent : string='';
studentArray : any[]= [
  {
    studId : 1,
    name : 'Abhishek',
    city:'Mangalwedha',
    isIndian: true
  },
  {
    studId : 2,
    name : 'Preeti',
    city:'Pune',
    isIndian: false
  },
  {
    studId :3,
    name : 'Rahul',
    city:'Mumbai',
    isIndian: true
  },
]
constructor(){
  this.rollNoArray = [11,12,13,14,15,16]
}


}
