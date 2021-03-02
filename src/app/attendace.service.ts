import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendaceService {
  attReport(data: any) {
    throw new Error('Method not implemented.');
  }
  url ="http://localhost:3000/attendaces";
  url1 ="http://localhost:3000/emp_attendance";
  constructor(private http: HttpClient) { }
  createUser(data){
    this.http.post(this.url, {
      name : data.name,
      email : data.email,
      contact : data.contact,
      designation : data.designation,
      date: data.date,
      status: data.status, 
    }).toPromise();
  }
  getUser(){
    return this.http.get(this.url)
  }
  getAttend(){
    return this.http.get(this.url1)
  }

  presentEmployee(data){
  this.http.post(this.url1, {
  name: data.name,
  designation: data.designation,
  email: data.email,
  contact: data.contact,
  status: 'Present',
  date: new Date().toString()
    }).toPromise();
  } 
  absentEmployee(data){
    this.http.post(this.url1, {
  name: data.name,
  designation: data.designation,
  email: data.email,
  contact: data.contact,
  status: 'Absent',
  date: new Date().toString()
    }).toPromise();
  } 
}
