import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class UserService
{
    constructor(private http1:HttpClient)
    {

    }

    addUsertoAPI(user:User)
    {
        return this.http1.post("http://localhost:61494/api/Login",user);
    }
}