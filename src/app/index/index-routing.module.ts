import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppIndexComponent } from './app-index/app-index.component';


const routes: Routes = [
  { path: 'index', component: AppIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
