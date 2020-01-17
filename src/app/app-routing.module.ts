import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';
import { AppIndexComponent } from './app-index/app-index.component';

const routes: Routes = [
  { path: 'logon', component: LogonComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'index', component: AppIndexComponent},
  { path: '', redirectTo: '/logon', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
