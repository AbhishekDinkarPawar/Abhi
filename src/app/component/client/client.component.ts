import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  alertText : string = ' client Page Loaded'
  clientArray: any[] = []
  clientObj: any = {
    "clientId": 0,
    "clientName": "",
    "businessName": "",
    "contactPerson": "",
    "contactNo": "",
    "altcontactNo": "",
    "email": "",
    "createdDate": new Date(),
    "logo": ""
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadClient()
  }
  loadClient() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients').subscribe((res: any) => {
      this.clientArray = res.data
    })
  }
  OnSaveClient() {
    this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/AddClient', this.clientObj).subscribe((res: any) => {
      if (res.result) {
        alert("client Saved")
        this.loadClient()
      } else {
        alert(res.message)
      }
    })
  }
  onEdit(item: any) {
    this.clientObj = item
  }
  OnUpdateClient() {
    this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/UpdateClient', this.clientObj).subscribe((res: any) => {
      if (res.result) {
        alert("client Updated")
        this.loadClient()
      } else {
        alert(res.message)
      }
    })
  }
  onDelete(id: any) {
    this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/DeleteClient?id=' + id, '').subscribe((res: any) => {
      if (res.result) {
        alert("client Deleted")
        this.loadClient()
      } else {
        alert(res.message)
      }
    })
  }
}
