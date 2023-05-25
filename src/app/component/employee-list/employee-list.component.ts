import { Component } from '@angular/core';
import { Emp } from 'src/app/classes/emp';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  isSidePanelOpen: boolean = true
  employeeArray: Emp []= [] ;
  employeeObject: Emp ; //1st step
  constructor() {
    this.employeeObject = new Emp () // 2nd step
    const localData = localStorage.getItem('empArr')
    if (localData != null) {
      this.employeeArray = JSON.parse(localData)
    }
  }
  showSidePanel() {
    this.isSidePanelOpen = true
    this.employeeObject = {
      empName: '',
      empId: 0,
      address: '',
      city: '',
      contact: '',
      dept: '',
    }
  }
  closeSidePanel() {
    this.isSidePanelOpen = false
  }
  onSaveEmp() {
    this.employeeArray.push(this.employeeObject)
    alert('Employee Saved')
    this.employeeObject = {
      empName: '',
      empId: 0,
      address: '',
      city: '',
      contact: '',
      dept: '',
    }
    localStorage.setItem('empArr', JSON.stringify(this.employeeArray))
  }
}
