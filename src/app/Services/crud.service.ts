import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  
export class CrudService {

  constructor(private http : HttpClient) { }

  private UserURL='http://localhost:3000/users';


    getUserData():Observable<any>  
  {
    return this.http.get(this.UserURL);
  }

  Savedata(user:any):Observable<any>
  {
    return this.http.post(this.UserURL,user);
  }

  DeleteData(id:string):Observable<any>
{
  return this.http.delete(`${this.UserURL}/${id}`);
}

UpdateUser(user:any, id:string):Observable<any>
{
  return this.http.put(`${this.UserURL}/${id}`,user);
}

}
