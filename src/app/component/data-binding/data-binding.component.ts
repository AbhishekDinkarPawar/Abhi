import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  firstName: string = 'demo';
  minLength: number = 3;
  inputType: string = "checkbox";
  placholderText = "Enter Name";
  textBoxId = 'txtMyName';
  pColor = 'text-primary';

  selectedCity: string;
  name: string = "abhishek";
  cousreName: string = 'react';
  empName: string = 'Shankar';
  empCity: string = 'Nagpur';
  rollNo: number = 123;
  isIndian: boolean = true;
  gender: string = 'male';


  constructor() {
    this.selectedCity = 'Mumbai';
  }
  onDecrement() {
    this.minLength--;
    //this.minlenth = this.minlength - 1
  }
  onIncrement() {
    this.minLength++;
    //this.minlenth = this.minlength + 1
  }

  onCityChange(event: any) {
    this.selectedCity = event.target.value;
  }

}
