import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  firstName: string = 'Demo course';
  productPrice: number = 11223.324;
  todaysDate: Date = new Date();
  courseCandidates = 35;
  cityArray: string [] = [ 'Nagpur', 'solapur', 'mumbai','solapaur','panji'];
  studetObject: any = {
    name: 'Demo',
    course:'Angular',
    duration: '3 months',
    teamSize:35
  };

  studentArray: any[] = [
    {
      studId: 1,
      name: 'Abhishek',
      city: '',
      isIndian: true
    },
    {
      studId: 2,
      name: '',
      city: 'Pune',
      isIndian: false

    },
    {
      studId: 3,
      name: 'Rahul',
      city: 'Mumbai',
      isIndian: ''

    }]
}
