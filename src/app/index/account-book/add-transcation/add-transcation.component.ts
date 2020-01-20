import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzCascaderOption } from 'ng-zorro-antd';
import { AccountService } from '../../service/account.service';
import { resolve } from 'url';
import { SubCategory } from 'src/app/shared/SubCategory';
import { Category } from 'src/app/shared/Category';


@Component({
  selector: 'app-add-transcation',
  templateUrl: './add-transcation.component.html',
  styleUrls: ['./add-transcation.component.css']
})
export class AddTranscationComponent implements OnInit {
  // _visible: nz-drawer是否可见.
  // 使用存取器，属性名前加_（下划线）
  // @Input() 注解位于getter方法，
  // setter方法用于触发@OutPut()方法
  // 从而实现父子组件的双向绑定
  private _visible: boolean;

  @Input()
  get visible() {
    return this._visible;
  }

  set visible(bool: boolean) {
    this._visible = bool;
    this.visibleChange.emit(bool);
  }

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

  reactiveForm: FormGroup;
  values: string[] | null = null;
  topCategories: Array<Category>;
  subCategories: { [key: string], Array<SubCategory> };
  nzOptions: NzCascaderOption[];

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      amount: [null, [Validators.required]],
      category: [null, [Validators.required]],
      subCategory: [null, [Validators.required]],
      remarks: [null]
    });
  }

  loadData(node: NzCascaderOption, index: number): PromiseLike<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (index < 0) {
          node.children = topCategories;
        } else if (index == 0) {

        }
      }))
    });
  }

  private closeTrans(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  private onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  private submitForm(): void {

  }
}
