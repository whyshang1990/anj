import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from 'src/app/shared/BaseResponse';
import { Observable } from 'rxjs';

const urlPre: string = "http://localhost:8889/api/v1/category"

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private createTransUrl: string = urlPre + "/all"

  constructor(private http: HttpClient) { }

  private getCategories(): Observable<BaseResponse<any>>{
    return this.http.get<BaseResponse<any>>(this.createTransUrl);
  }

  getOptions(): any {
    let options: any[] = [];
    let categories: TopCategory[] 
    this.getCategories().subscribe(
      response => {
        categories = response.data;
        console.log("xxx: " + categories);
        for(let topCategory of categories) {
          options.push(topCategory)
        }
        console.log("xxxxx: " + options)
        return options
    });
    
  }
}
