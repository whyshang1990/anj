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
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.logonService.login().subscribe(
      response => {
        this.response = response;
        console.log(this.response);
      }
    )
    console.log(this.response);
  }

  constructor(
    private formBuilder: FormBuilder,
    private logonService: LogonService) { }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    })
  }

}
