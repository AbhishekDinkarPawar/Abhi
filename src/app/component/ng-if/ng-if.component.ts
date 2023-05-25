import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {


  isDiv2Visible: boolean = true;
  isDiv3Visible: boolean = false;
  name:string = 'Abhishek';
  surname:string = 'Abhishek';
  studentObj = {
    name : 'Abhishek',
    empId: 1212,
    isCheck : true
  }

  hideDiv2(){
    this.isDiv2Visible =false;
  }
  showDiv2() {
    this.isDiv2Visible=true;
  }
  toggleDiv3(){
    // if(this.isDiv3Visible==false){
    //   this.isDiv3Visible==true;
    // }else{
    //   this.isDiv3Visible==false;
    // }
    this.isDiv3Visible=!this.isDiv3Visible
  }

}
