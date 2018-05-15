import {registerComponent} from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router/src/router';

const routes: Routes = [
  {
    path: 'register',
    component: registerComponent
  }
// tslint:disable-next-line:semicolon
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
