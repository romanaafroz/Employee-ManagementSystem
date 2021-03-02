import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit() {

  }
  userData;
  status;
  
  loginUser(data) {
    this.userService.loginUser(data).subscribe((response) => {
      this.userData = response;
      for (let i = 0; i < this.userData.length; i++) {
        if (data.email == this.userData[i].email && data.password == this.userData[i].password) {
          this.router.navigate(['adminNav']);
        } else {
          alert("Email or password does'n match");
        }
      }
    })
  }

}
