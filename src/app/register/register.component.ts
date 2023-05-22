import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl}  from '@angular/forms'
import {AssignmentService} from '../assignment.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false
  register = new FormGroup({
    
    name: new FormControl(''),
    password:new FormControl(''),
    id:new FormControl('')
  })

  constructor(private ass:AssignmentService,private router: Router){}
  ngOnInit(): void {
      
  }
  collection(){
    //console.warn(this.register.value)
    this.ass.registerUser(this.register.value).subscribe((res)=>{
      console.warn("res",res);
      this.alert=true;
      this.router.navigate(['/login']);
    })
  }
  closeAlert(){
    this.alert=false
  }
}
