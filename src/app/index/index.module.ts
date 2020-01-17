import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { AppIndexComponent } from './app-index/app-index.component';
import { HomeComponent } from './home/home.component';
import { AccountBookComponent } from './account-book/account-book.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [
    AppIndexComponent,
    HomeComponent,
    AccountBookComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
