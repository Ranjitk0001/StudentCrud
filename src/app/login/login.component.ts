import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private http: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  loginMeth() {
    let var1: any = null;
    this.http.insertData("login", this.login, var1).subscribe(data => {
      alert(JSON.stringify(data));
      const accessToken = data['accessToken'];
      const userType = data['userType'];
      const orgName = data['orgName'];
      const userName = data['name'];

      if (userType === "Not Found") {
        alert("Invalid UserID Or Password");
      } else {
        sessionStorage.setItem('access-token', accessToken);
        sessionStorage.setItem('userType', userType);
        sessionStorage.setItem('orgName', orgName);
        sessionStorage.setItem('userName', userName);
        this.router.navigateByUrl('/studpath');
      }
    });
  }
}

export class Login {
  userName: string = '';
  password: string = '';
}
