import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../shared/BaseResponse';
import { User } from '../../shared/User';

const urlPre: string = "http://localhost:8889/api/v1/user"

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

  login(user: User): Observable<BaseResponse<any>> {
    return this.http.post<BaseResponse<any>>(this.logonUrl, user);
  }

  regist(user: User): Observable<BaseResponse<any>> {
    return this.http.post<BaseResponse<any>>(this.createUrl, user);
  }
}
