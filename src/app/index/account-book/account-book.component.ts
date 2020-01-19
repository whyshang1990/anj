import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzCascaderOption } from 'ng-zorro-antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-account-book',
  templateUrl: './account-book.component.html',
  styleUrls: ['./account-book.component.css']
})
export class AccountBookComponent implements OnInit {
 // nz-drawer是否可见
 visible = false;
 reactiveForm: FormGroup;
 nzOptions: NzCascaderOption[] = options;
 values: string[] | null = null;

 constructor(private formBuilder: FormBuilder) { }

 ngOnInit() {
   this.reactiveForm = this.formBuilder.group({
     amount: [null, [Validators.required]],
     category: [null, [Validators.required]],
     subCategory: [null, [Validators.required]],
     remarks: [null]
   })
 }

 submitForm(): void {

 }

 private createTrans(): void {
   this.visible = true;
 }
 private closeTrans(): void {
   this.visible = false;
 }

 private onChanges(values: string[]): void {
   console.log(values, this.values);
 }
}
