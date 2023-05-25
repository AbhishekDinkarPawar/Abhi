import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  userarr : any[] = [];
  userObj : any = {
    "id": 1,
    "name": "",
    "username": "",
    "email": "",
  }
  constructor(private http : HttpClient){

  }
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userarr = res
    })
  }
  adduser(){
    this.http.post('https://jsonplaceholder.typicode.com/users',this.userObj).subscribe((res:any)=>{
      if (res.result){
        this.getUser()
      }
    })
  }
  updateUser(){
    this.http.post('https://jsonplaceholder.typicode.com/users',this.userObj).subscribe((res:any)=>{
      
    })
  }
  // deleteUser(){
  //   this.http.post().subscribe((res:any)=>{

  //   })
  // }
}
