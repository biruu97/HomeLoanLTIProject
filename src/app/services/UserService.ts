import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class UserService
{
    constructor(private http1:HttpClient,private http2:HttpClient,private http3:HttpClient,private http4:HttpClient)
    {

    }

    getLoginfromAPI(user:User)
    {
        return this.http2.post("http://localhost:61494/api/Login",user);
    }

    addUsertoAPI(user:User)
    {
        return this.http3.post("http://localhost:61494/api/Registration",user);
    }

    
    getPreviousRecords(user:User)
    {
        return this.http4.post("http://localhost:61494/api/PreviousRecords",user);
    }
    
}