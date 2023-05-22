import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {AssignmentService } from '../assignment.service'
import { Router } from '@angular/router';


interface MarksData {
  rollnumber: string;
  name: string;
  date: string;
  marks: string | null;
}

@Component({
  selector: 'app-update-marks',
  templateUrl: './update-marks.component.html',
  styleUrls: ['./update-marks.component.css']
})
export class UpdateMarksComponent implements OnInit {
  alert:boolean=false;

  editMarks = new FormGroup({
    rollnumber: new FormControl(''),
    name: new FormControl(''),
    date: new FormControl(''),
    marks: new FormControl('')
  })
  constructor(private router:ActivatedRoute,private ass:AssignmentService, private routerm: Router){}
  ngOnInit(): void {
      console.warn(this.router.snapshot.params['id'])
      this.ass.getCurrentMarks(this.router.snapshot.params['id']).subscribe((res: any)=>{
        console.warn(res);
        this. editMarks = new FormGroup({
          
          rollnumber: new FormControl(res.rollnumber),
          name: new FormControl(res.name),
          date: new FormControl(res.date),
          marks: new FormControl(res.marks)
        })
      })
  }
  collection(){
    //console.warn(this.editMarks.value);
    this.ass.updateMarks(this.router.snapshot.params['id'],this.editMarks.value).subscribe((res)=>{
      //console.warn(res)
      this.alert=true
      this.routerm.navigate(['/list']);
    })
  }
  closeAlert(){
    this.alert=false
  }
  logout(): void {
    // Perform any necessary logout logic here
  
    // Navigate to the login page
    this.routerm.navigate(['/login']);
  }
}
