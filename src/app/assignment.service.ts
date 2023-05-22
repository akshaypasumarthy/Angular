import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  url="http://localhost:3000/marks"
  rooturl="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getMarks(rollNumber: string, date: string): Observable<number[]> {
    const url = `http://localhost:3000/marks?rollNumber=${rollNumber}&date=${date}`;
    return this.http.get<number[]>(url);
  }
  getList(): Observable<any[]>{
    
    return this.http.get<any[]>(this.url);
  }
  saveMarks(data: any){
    
   return  this.http.post(this.url,data);
    
  }
  deleteField(id: any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentMarks(id: any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateMarks(id: any,data: any){
    return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data:any){
    return this.http.post(this.rooturl+"users",data);
  }
  login(name:string,password:string):Observable<any>{
    return this.http.post<any>(this.rooturl+"users",{name,password});
  }
}
