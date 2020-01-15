import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../common/BaseResponse';

const urlPre = "/user"

@Injectable({
  providedIn: 'root'
})
export class LogonService {
  private logonUrl = urlPre + "/login"
  params = {
    "username": "wuhaiyun",
    "password": "wuhaiyun",
  }

  constructor(private http: HttpClient) { }

  login(): Observable<BaseResponse<any>> {
    return this.http.post<BaseResponse<any>>(this.logonUrl, this.params);
  }
}
