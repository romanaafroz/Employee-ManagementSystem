import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendaceService } from '../attendace.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-attendace',
  templateUrl: './create-attendace.component.html',
  styleUrls: ['./create-attendace.component.css']
})
export class CreateAttendaceComponent implements OnInit {
  getData;
  getAttendace;
  presentObj={
    name : '',
    designation : '',
    email : '',
    contact : '',
    date : ''
  }
  absentObj: {
    name : '',
    designation : '',
    email : '',
    contact : '',
    date : ''
  }
  constructor( private attendaceService: EmployeeService, private router : Router, private pService : AttendaceService, private aService : AttendaceService) { }
currDate = new Date();
  ngOnInit() {
    this.attendaceService.getUser().subscribe((response) =>{
      this.getData = response;
      this.getAttendace = response;
    })
    this.presentEmp;
    this. absentEmp;
  }
  

      presentEmp(present){
      
        this.presentObj = present;
        this.pService.presentEmployee(this.presentObj);
        alert("Attendance has been recorded")
      }
      absentEmp(absent){
        this.absentObj = absent;
        this.aService.absentEmployee(this.absentObj);
      }
}
