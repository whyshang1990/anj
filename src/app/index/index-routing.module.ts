import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppIndexComponent } from './app-index/app-index.component';
import { HomeComponent } from './home/home.component';
import { AccountBookComponent } from './account-book/account-book.component';


const indexRoutes: Routes = [
  { 
    path: 'index', 
    component: AppIndexComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'account-book', component: AccountBookComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(indexRoutes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
