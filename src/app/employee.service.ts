import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url ="http://localhost:3000/employees";
  constructor(private http: HttpClient) { }
  createUser(data){
    this.http.post(this.url, {
      name : data.name,
      fname : data.fname,
      mname : data.mname,
      gender: data.gender,
      dob : data.dob,
      email : data.email,
      contact : data.contact,
      designation : data.designation,
      department: data.department,
      equalification : data.equalification,
      address: data.address,
    }).toPromise();
  }
  getUser(){
    return this.http.get(this.url)
  }
}
