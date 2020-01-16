import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../common/BaseResponse';
import { User } from '../common/User';

const urlPre: string = "/user"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private logonUrl: string = urlPre + "/login"
  private createUrl: string = urlPre + "/create"
  params = {
    "username": "wuhaiyun",
    "password": "wuhaiyun",
  }

  constructor(private http: HttpClient) { }

  login(): Observable<BaseResponse<any>> {
    return this.http.post<BaseResponse<any>>(this.logonUrl, this.params);
  }

  regist(user: User): Observable<BaseResponse<any>> {
    return this.http.post<BaseResponse<any>>(this.createUrl, user);
  }
}
