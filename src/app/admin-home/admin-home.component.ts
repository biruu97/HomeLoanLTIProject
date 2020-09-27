import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { StoreDataService } from '../services/StoreDataService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
currUser:User;
name;
  constructor(private storeData:StoreDataService,private userService:UserService) {
    this.currUser=new User();
    this.currUser=this.storeData.currUser;
    this.storeData.currUser=new User();
   }

  ngOnInit(): void {
  }

}
