import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountBookComponent } from './account-book/account-book.component';
import { IndexComponent } from './index.component';


const indexRoutes: Routes = [
  { 
    path: 'index', 
    component: IndexComponent,
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
