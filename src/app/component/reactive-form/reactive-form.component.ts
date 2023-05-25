import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  userForm : FormGroup ;
  constructor (){
    this.userForm = new FormGroup({
      username : new FormControl('',[Validators.required,Validators.minLength(4)]),
      password : new FormControl('', [Validators.maxLength(5),Validators.required]),
      city : new FormControl(),
      state : new FormControl(),
      family : new FormGroup({
        motherName: new FormControl('',[Validators.required,Validators.minLength(4)]),
        fatherName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      })
    })
  }

  ngOnInit(): void {

  }
  onUserSave(){
    // debugger
    const formValue = this.userForm.value;
    console.log(formValue);
    if(this.userForm.invalid){

    }
  }
  clearForm(){
    this.userForm.reset();
  }
}
