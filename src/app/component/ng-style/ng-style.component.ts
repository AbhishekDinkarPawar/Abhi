import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  backColor: string = 'red';
  fontColor = '5px solid blue';
  myStyle: any = {
    color: 'red',
    'font-size': '22px'
  }
  progress: number = 40;
   studentArray: any[] = [
    {
      studId: 1,
      name: 'Abhishek',
      city: 'Mangalwedha',
      attendance: 30
    },
    {
      studId: 2,
      name: 'Preeti',
      city: 'Pune',
      attendance: 50

    },
    {
      studId: 3,
      name: 'Rahul',
      city: 'Mumbai',
      attendance: 90

    }]
}
