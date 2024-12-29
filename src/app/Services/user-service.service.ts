import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

   private userdata:any[]=[

    {id: 1,name :"John",age:25 },
    {id: 2,name :"cddc",age:20 },
    {id: 2,name :"cdc",age:22 },
  ]
  constructor(private http : HttpClient) { }

  getUserData(): any []{
    return this.userdata;
  }

  getServerData():Observable<any>
  {

   return this.http.get('http://localhost:3000/users');

  }
}
