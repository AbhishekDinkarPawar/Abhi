import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  div1Class:string = 'bg-primary';
  isIndian: boolean = true;
  isSidePanelOpen:boolean = true;
  bgColorArray:string [] = ['bg-primary','bg-danger','bg-secondary','bg-success','bg-info'];
  selectedColor: string = '';




  selectedStudent : string='';
studentArray : any[]= [
  {
    studId : 1,
    name : 'Abhishek',
    city:'Mangalwedha',
    isIndian: true,
    gender: 'male'
  },
  {
    studId : 2,
    name : 'Preeti',
    city:'Pune',
    isIndian: false,
    gender: 'female'
  },
  {
    studId :3,
    name : 'Rahul',
    city:'Mumbai',
    isIndian: true,
    gender: 'male'
  }]


}
