import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = "";
  pasword: string = "";
  msg: string = "";

  constructor(@Inject(LoginService) private ls: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  ChkUserDetails() {
    if (this.ls.UserChkDetails(this.username, this.pasword) == true) {
      this.router.navigate(['productList']);
    }
    else {
      this.msg = "Please check username/password";
    }

  }

}
