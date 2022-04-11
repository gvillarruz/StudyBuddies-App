import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService],
})
export class DashboardComponent implements OnInit {
  username = '';
  name;

  dashboardStudentData = [];
  dashboardTutorData = [];

  userType = localStorage.getItem('userType');

  constructor(
    public loginService: LoginService,
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    if (this.userType === 'parent') {
      this.http
        .post('/api/dashboard', {
          Token: localStorage.getItem('token'),
          type: localStorage.getItem('userType'),
        })
        .subscribe((res: any) => {
          console.log(res);
          if (res.message == 'False') {
            this.messageService.add({
              severity: 'warn',
              summary: 'Warning',
              detail: 'No data found',
            });
          } else {
            this.dashboardStudentData = res.results;
          }
        });

      this.http
        .post('/api/accountInfo', { token: localStorage.getItem('token') })
        .subscribe((res: any) => {
          this.username = res.parentFirstName + ' ' + res.parentLastName;
          console.log(res);
        });
    } else {

      this.http
        .post('/api/dashboard', {
          Token: localStorage.getItem('token'),
          type: localStorage.getItem('userType'),
        })
        .subscribe((res: any) => {
          console.log(res);
          this.dashboardTutorData = res.scheduledSessions;
        });
    }
  }
}
