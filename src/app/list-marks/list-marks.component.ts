import {OnInit} from '@angular/core'
import { Component } from '@angular/core';
import {AssignmentService}  from '../assignment.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-marks',
  templateUrl: './list-marks.component.html',
  styleUrls: ['./list-marks.component.css']
})
export class ListMarksComponent implements OnInit{

  constructor(private assignment:AssignmentService,private router:Router){}
  collection: any[] = [];
  ngOnInit(): void{
    this.assignment.getList().subscribe((res: any[])=>{
   
      this.collection=res;
      console.warn(this.collection);
    });
  }
  logout(): void {
    // Perform any necessary logout logic here
  
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
  deleteField(item: any){
    this.collection.splice(item-1,1);
    this.assignment.deleteField(item).subscribe((res)=>{
     // console.warn("result",res);
    })
  }
}
