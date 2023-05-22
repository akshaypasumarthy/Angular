import { Component,OnInit } from '@angular/core';
import {AssignmentService}  from '../assignment.service'
import { Router } from '@angular/router';
import {HttpClient}  from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: boolean = false
  name:string='';
  password:string='';
  constructor(private ass:AssignmentService,private router: Router,private http: HttpClient){

  }
  ngOnInit(): void {
      
  }
  login():void{
   /* this.ass.login(this.name,this.password).subscribe((res: any)=>{
     // console.warn(res);
     
     
    })
    const isAuthenticated = true; // Replace this with actual authentication logic

    if (isAuthenticated) {
      // If authentication is successful, navigate to the desired page
      this.router.navigate(['/list']);
    } else {
      // If authentication fails, show an error message or perform any other action
      console.log('Authentication failed');
    }
    */
    this.http.get<any[]>('http://localhost:3000/users').subscribe(users=>{
      const user =  users.find(u =>u.name===this.name && u.password===this.password)
      if(user){
        console.warn("hi")
        this.router.navigate(['/list']);
        this.alert=true;
      }
      else{

      }
    })
    
  }
  closeAlert(){
    this.alert=false
  }

}
