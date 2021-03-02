import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  url ="http://localhost:3000/salaries";
  // url1 ="http://localhost:3000/pay_Salary";
  constructor(private http: HttpClient) { }
  createUser(data){
    this.http.post(this.url, {
      name : data.name,
      email : data.email,
      contact : data.contact,
      designation : data.designation,
      month : data.months,
      salary: data.salary, 
      status: data.status,
    }).toPromise();
  }
  getUser(){
    return this.http.get(this.url)
  }
  getSal(){
    return this.http.get(this.url)
  }
  paySalary(data){
    this.http.post(this.url, {
  name: data.name,
  designation: data.designation,
  email: data.email,
  contact: data.contact,
  months: data.months,
  salary: data.salary,
  status: 'pay'
    }).toPromise();
  } 
}
