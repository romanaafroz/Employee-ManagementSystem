import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor( private employeeService: EmployeeService, private router : Router) { }
  getData;
  ngOnInit() {
    this.employeeService.getUser().subscribe((response) =>{
      this.getData = response;
    })
  }
  createEmployee(data){
this.employeeService.createUser(data);
  }

}
