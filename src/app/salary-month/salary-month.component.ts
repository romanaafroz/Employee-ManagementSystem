import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-salary-month',
  templateUrl: './salary-month.component.html',
  styleUrls: ['./salary-month.component.css']
})
export class SalaryMonthComponent implements OnInit {
  getData;
  getSalary;
  salaryObj={
    name : '',
    designation : '',
    email : '',
    contact : '',
    months : '',
    salary: ''
  }
  constructor( private salaryService: EmployeeService, private salService: SalaryService, private router : Router) { }

  ngOnInit() {
    this.salaryService.getUser().subscribe((response) =>{
      this.getData = response;
      this.getSalary = response;
    })
    this.paySal;
  }
  createSalarye(data){
    this.salaryService.createUser(data);
  }
  paySal(pay){
    this.salaryObj = pay;
    this.salService.paySalary(this.salaryObj);
  }
}
