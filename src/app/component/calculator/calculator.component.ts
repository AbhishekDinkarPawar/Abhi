import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  number1 = 12;
  number2 = 12;
  result: number;

  cityName : string = '';
  cityArray : string[] = ['mumbai'];

  addCity(){
    this.cityArray.push(this.cityName)
  }

  constructor(){
    this.result = 0;
  }
  onAdd(){
    this.result = this.number1 + this.number2;
  }
  onSub(){
    this.result = this.number1 - this.number2;
  }
  onMul(){
    this.result = this.number1 * this.number2;
  }
  onDivide(){
    this.result = this.number1 / this.number2;
  }
}
