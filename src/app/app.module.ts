import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateAttendaceComponent } from './create-attendace/create-attendace.component';
import { AttendaceComponent } from './attendace/attendace.component';
import { AttendaceReportComponent } from './attendace-report/attendace-report.component';
import { PayrollComponent } from './payroll_table/payroll.component';
import { SalaryMonthComponent } from './salary-month/salary-month.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { HomepageComponent } from './homepage/homepage.component';

import { DashboadComponent } from './dashboad/dashboad.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { FooterComponent } from './footer/footer.component';
import { SalaryReportComponent } from './salary-report/salary-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegistrationComponent,
    SignupComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    CreateAttendaceComponent,
    AttendaceComponent,
    AttendaceReportComponent,
    PayrollComponent,
    SalaryMonthComponent,
    HeadingComponent,
    AdminNavComponent,
    HomepageComponent,

    DashboadComponent,

    EmployeeReportComponent,

    FooterComponent,

    SalaryReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "employee",
        component: EmployeeComponent
      },
      {
        path: "homepage",
        component: HomepageComponent
      },
      {
        path: "registration",
        component: RegistrationComponent
      },
      {
        path: "dashboad",
        component: DashboadComponent,
        children: [
          {
            path: "registration",
            component: RegistrationComponent
          },
          {
            path: "login",
            component: LoginComponent
          }
        ]

      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "attendace",
        component: AttendaceComponent,
      },
      
      {
        path: "singnup",
        component: SignupComponent
      },
      {
        path: "footer",
        component: FooterComponent
      },
      {
        path: "adminNav",
        component: AdminNavComponent,
        children: [
          {
            path: "createEmployee",
            component: CreateEmployeeComponent
          },
          {
            path: "attendence",
            component: CreateAttendaceComponent
          },
          {
            path: "attendenceReport",
            component: AttendaceReportComponent
          },
          {
            path: "Salary",
            component: SalaryMonthComponent
          },
          {
            path: "payroll",
            component: PayrollComponent
          },
          {
            path: "employeeReport",
            component: EmployeeReportComponent
          }
        ]
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
