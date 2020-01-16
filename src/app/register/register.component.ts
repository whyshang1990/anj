import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { BaseResponse } from '../common/BaseResponse';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  response: BaseResponse<any>;

  submitForm(): void{
    for(const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.userService.regist(this.validateForm.value).subscribe(
      response => {
        this.response = response;
        if(this.response.code === 1 ) {
          this.message.create('success', "注册成功");
          this.router.navigate(["/logon"])
        } else {
          this.message.create('warning', "注册失败");
        }
      }),
      error => {
        this.message.create('error', "接口异常");
        console.log(error.error.message);
      };
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private message: NzMessageService,
    private router: Router) { }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}
