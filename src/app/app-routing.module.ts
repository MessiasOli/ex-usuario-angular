import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { UsersComponent } from './views/users/users.component'
import { FormComponent } from './views/form/form.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "register",
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
