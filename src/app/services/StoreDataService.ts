import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable()
export class StoreDataService
{
    currUser:User;
    constructor()
    {
        this.currUser=new User();
    }
}