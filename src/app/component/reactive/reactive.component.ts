import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{

  userform: FormGroup;
  constructor() {
    this.userform = new FormGroup({
      firstName : new FormControl('', [Validators.required ]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormGroup('', [Validators.required, Validators.email]),
      phoneNo: new FormGroup('', [Validators.required]),
      Status: new FormGroup('', [Validators.required]),
      country: new FormGroup('', [Validators.required]),
      city: new FormGroup('', [Validators.required]),
      dateOfBirth: new FormGroup('', [Validators.required]),
      Password: new FormGroup('', [Validators.required]),
     })
  }
  ngOnInit(): void {

  }

  onSave() {
    const formValue = this.userform.value;
    console.log(formValue);
    if (this.userform.invalid) {

    }
  }
  clearForm() {
    this.userform.reset();
  }
}
