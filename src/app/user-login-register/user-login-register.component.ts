import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import {UserService} from '../services/UserService';


@Component({
  selector: 'app-user-login-register',
  templateUrl: './user-login-register.component.html',
  styleUrls: ['./user-login-register.component.css']
})
export class UserLoginRegisterComponent implements OnInit {
user:User;
rePass:string;
msg;
priviledge:string;
  constructor(private userService:UserService) {
    this.user=new User();
   }

   doRegister()
   {
      this.userService.addUsertoAPI(this.user).subscribe((data)=>this.msg=data);
   }

  ngOnInit(): void {
  }

}
