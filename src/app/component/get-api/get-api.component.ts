import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent implements OnInit {
  candidates: any[] = [];
  canidateObj: any = {
    candidateId: 0,
    name: " ",
    contactNo: "",
    email: "",
    password: "",
    createdDate: new Date(),
    city: "",
    collegeName: "",
    education: "",
    bankName: "",
    accNo: "",
    ifscCode: "",
    reference: "",

  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadCandidate()
  }

  loadCandidate(){
    this.http.get('https://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates').subscribe((response: any) => {

      this.candidates = response.data;
    })
  }
  onSaveCandidate() {
      this.http.post('https://onlinetestapi.gerasim.in/api/OnlineTest/AddCandidate', this.canidateObj).subscribe((res: any) => {
        if(res.result){
          alert(res.message)
          this.loadCandidate()
        }
   })
  }
}

