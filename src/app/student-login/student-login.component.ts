import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  rollNumber: string='';
  date: string='';
  collection: any[] = []

  constructor(private http: HttpClient) {}

  fetchData() {
    const url = `http://localhost:3000/marks?rollNumber=${this.rollNumber}&date=${this.date}`;

    this.http.get<number[]>(url).subscribe(
      response => {
        this.collection = response;
        console.warn(response);
      },
      error => {
        console.error('Error fetching data:', error);
      }
      
    );
    console.warn(this.collection);
  }
}
