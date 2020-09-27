import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { StoreDataService } from '../services/StoreDataService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
curruser:User;
records;
flag:number=0;
  constructor(private myuser:StoreDataService,private userService:UserService,private myRoute:Router) {
    this.curruser=new User();
    this.curruser=this.myuser.currUser;
    this.myuser.currUser=new User();
    this.userService.getPreviousRecords(this.curruser).subscribe((data)=>{
      this.records=data;
    });
   }

  toggleHistories()
  {
    this.flag=1-this.flag;
  }

  applyNow()
  {
      this.myRoute.navigate(['personaldetails']);
  }

  ngOnInit(): void {
  }

}
