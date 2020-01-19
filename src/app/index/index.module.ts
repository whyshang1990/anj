import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountBookComponent } from './account-book/account-book.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexHeaderComponent } from './shared/index-header/index-header.component';
import { IndexComponent } from './index.component';
import { AddTranscationComponent } from './account-book/add-transcation/add-transcation.component';


@NgModule({
  declarations: [
    HomeComponent,
    AccountBookComponent,
    IndexHeaderComponent,
    IndexComponent,
    AddTranscationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
