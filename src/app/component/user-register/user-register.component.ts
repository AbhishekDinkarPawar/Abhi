import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  users : any[] = [];
  user : any = {
    name: ' ',
     city : ' ',
    contact : ' ',
    isIndian : false,
    bgColor : ' ',
  };

  ngOnInit ():void {
    const localData = localStorage.getItem('userList');
    if(localData!=null){
      this.users = JSON.parse(localData);
    }
  }

  addUser(){
    this.users.push(this.user);
    localStorage.setItem('userList',JSON.stringify(this.users));
    this.resetForm()
  }
  removeUser(index : number){
    this.users.splice(index,1);
    localStorage.setItem('userList',JSON.stringify(this.users));

  }
  resetForm(){
    this.user = {
      name:'',
      city:'',
      contact : ' ',
      isIndian : false,
      bgColor : ' ',
    }
  }
}
