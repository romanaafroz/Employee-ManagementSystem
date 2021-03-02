import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-salary-report',
  templateUrl: './salary-report.component.html',
  styleUrls: ['./salary-report.component.css']
})
export class SalaryReportComponent implements OnInit {
  getReport;
  constructor(private salService: SalaryService, private router : Router) { }

  ngOnInit() {
    this.salService.getSal().subscribe((response) =>{
      this.getReport = response;
    })
  }

}
