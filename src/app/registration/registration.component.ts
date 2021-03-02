import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private router : Router) { }
 
  ngOnInit() {
  }
  rigisterUser(data){
    this.userService.rigisterUser(data);
    this.router.navigate(['/login']);
  }
}
