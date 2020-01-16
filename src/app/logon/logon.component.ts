import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogonService } from '../service/logon.service';
import { BaseResponse } from '../common/BaseResponse';

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
    this.logonService.login().subscribe(
      response => {
        this.response = response;
        console.log(this.response);
      });
  }

  constructor(
    private formBuilder: FormBuilder,
    private logonService: LogonService) { }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
