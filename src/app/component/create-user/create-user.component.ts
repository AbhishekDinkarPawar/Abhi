import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
    Name : string = 'Abhishek'
    Number: number = 1122
    todaysDate: Date  = new Date()
    isGraducte: boolean= true
    isIndian : boolean = true
}
