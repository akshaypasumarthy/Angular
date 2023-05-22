import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AssignmentService } from '../assignment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent implements OnInit {
  alert: boolean = false
  addMarks = new FormGroup({
  
    rollnumber: new FormControl(''),
    name: new FormControl(''),
    date: new FormControl(''),
    marks: new FormControl('')
  })
  constructor(private asg: AssignmentService,private routerm:Router) { }
  ngOnInit(): void {

  }
  collectMarks() {
    //console.warn(this.addMarks.value)
    this.asg.saveMarks(this.addMarks.value).subscribe((res) => {
    //console.warn("result is ",res);
    this.alert = true
    this.addMarks.reset({})
    this.routerm.navigate(['/list']);
    });

  }
  closeAlert() {
    this.alert = false
  }
  logout(): void {
    // Perform any necessary logout logic here
  
    // Navigate to the login page
    this.routerm.navigate(['/login']);
  }
}
