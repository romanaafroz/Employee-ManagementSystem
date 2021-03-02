import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendaceService } from '../attendace.service';

@Component({
  selector: 'app-attendace-report',
  templateUrl: './attendace-report.component.html',
  styleUrls: ['./attendace-report.component.css']
})
export class AttendaceReportComponent implements OnInit {
  getAttendace;
  constructor(private attendaceService: AttendaceService, private router : Router) { }
  
  ngOnInit() {
    this.attendaceService.getAttend().subscribe((response) =>{
      this.getAttendace = response;
    })
  }
 
}
