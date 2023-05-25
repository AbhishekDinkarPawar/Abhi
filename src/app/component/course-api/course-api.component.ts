import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-course-api',
  templateUrl: './course-api.component.html',
  styleUrls: ['./course-api.component.css']
})
export class CourseApiComponent implements OnInit{

  courseList : any[]=[]
  courseObject:any ={
    "CourseId": 0,
  "CourseName": "",
  "CourseDuration": "",
  "CourseBasicFees": "",
  }
  constructor(private http : HttpClient,private master : MasterService){}

  ngOnInit(): void {
    this.loadCourseData()
  }
  loadCourseData(){
    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList').subscribe((response:any)=>{
      this.courseList = response.data
    })
  }
  onSaveCourse(){
    this.master.saveCourse(this.courseObject).subscribe((result:any)=>{
      if(result.result){
        this.loadCourseData()
        alert(result.message)
      }else{
        alert(result.message)
      }
    })
  }
}
