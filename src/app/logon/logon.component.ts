import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { BaseResponse } from '../common/BaseResponse';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { User } from '../common/User';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  validateForm: FormGroup;
  response: BaseResponse<any>;

  submitForm(): void{
    for(const i in this.validateForm.controls) {
      // 手动更改表单状态时，例如 markAsDirty 后，需要执行 updateValueAndValidity 通知 nz-form-control 进行状态变更。
      // 标记表单控件值已改变
      this.validateForm.controls[i].markAsDirty();
      // 重新计算表单控件的值和验证状态
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let user: User = new User(this.validateForm.value.username, this.validateForm.value.password)
    console.log("username: " + this.validateForm.value.username)
    console.log("password: " + this.validateForm.value.password)
    this.userService.login(user).subscribe(
      response => {
        this.response = response;
        if(this.response.code === 1 ) {
          this.message.create('success', "登录成功");
          this.router.navigate(["/index"])
        } else {
          this.message.create('warning', "登录失败");
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
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
