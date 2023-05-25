import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-get1',
  templateUrl: './api-get1.component.html',
  styleUrls: ['./api-get1.component.css']
})
export class ApiGet1Component implements OnInit{

  candidates : any[]=[];
  candidates1 : any[]=[];
  candidates2 : any[]=[];
  candidates3: any[] = [];


  constructor(private http : HttpClient){}

  ngOnInit ():void {
    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList').subscribe((response:any)=>{
      this.candidates = response.data;

    })

    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEntrollments').subscribe((result:any)=>{
      this.candidates1 = result.data;
    })

    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllQuestion').subscribe((submit:any)=>{
      this.candidates2 = submit.data;
    })

    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllMaster').subscribe((result2:any)=>{
      this.candidates3 = result2.data;
    })
  }
}
