import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Interfaces/student';
import { IUser } from '../Interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = 'http://localhost:3005/Users';
  currentUser: IUser | undefined;
  UserId:BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient)
  {}

  getAllUsers() {
    return this._httpClient.get<any>(this.url);
  }

  getUserById(userId: any):Observable<any>
  {
    return this._httpClient.get(`${this.url}/${userId}`);
  }

  addUser(user: any) {
    return this._httpClient.post(this.url, user);
  }

  login(userName: string, password: string) {
    this.currentUser = {
      userName: userName,
      password: password,
    };
    let id ;
    this.UserId?.subscribe({next:res=>id=res})
    localStorage.setItem("Token",`${id}`);
  }

  get isLoggedin(): boolean {
    if (this.currentUser?.userName && this.currentUser.password) return true;
    return false;
  }

  logout() {
    this.currentUser = undefined;
    localStorage.removeItem("Token");
  }


}
