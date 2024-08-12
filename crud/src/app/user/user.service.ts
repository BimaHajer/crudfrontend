import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Login } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 urlAPI='http://localhost:3000'


  constructor(private http: HttpClient) { }
  
  login(user:any): Observable<any> {
      return this.http.post<any>(this.urlAPI+'/auth/login',user)
  }

  createUser(user:any): Observable<any>{
    return this.http.post<any>(this.urlAPI+'/user/create-user',user) as Observable<any>
  }
  getAllUsers(): Observable<any> {
  return this.http.get(this.urlAPI+'/user') as Observable<any>
  }
   getUserById(id:number){
    return this.http.get(this.urlAPI+'/user/'+JSON.stringify(id)) as Observable<any>
   }
  editUser(id:number,user:any): Observable<any>{
    return this.http.patch<any>(this.urlAPI+'/user/'+JSON.stringify(id),user) as Observable<any>
  }
  deleteUser(id:number): Observable<any>{
    return this.http.delete(this.urlAPI+'/user/'+JSON.stringify(id)) as Observable<any>
  }

}
