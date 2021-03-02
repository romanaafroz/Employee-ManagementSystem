import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
url ="http://localhost:3000/users";
  constructor(private http: HttpClient) { }
  loginUser(data){
    return this.http.get(this.url);
  }

  rigisterUser(data){
    this.http.post(this.url, {
      name : data.name,
      email : data.email,
      password : data.password,
    }).toPromise();
  }

  getUser(){
    return this.http.get(this.url);
  }
}
