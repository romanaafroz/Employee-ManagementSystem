import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css']
})
export class EmployeeReportComponent implements OnInit {
getEmployee;
  constructor(private emplService : EmployeeService) { }

  ngOnInit() {
    this.emplService.getUser().subscribe((response) => {
      this.getEmployee = response;
    })
  }

}
