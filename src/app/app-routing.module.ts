import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddMarksComponent} from './add-marks/add-marks.component';
import {ListMarksComponent} from './list-marks/list-marks.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UpdateMarksComponent} from './update-marks/update-marks.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import {AuthGuard} from './auth-guard.service'
const routes: Routes = [
{
  component:AddMarksComponent,
  path:'add'
},

{
  component:LoginComponent,
  path:'login'
},
{
  component:RegisterComponent,
  path:'register'
},
{
  component:UpdateMarksComponent,
  path:'update/:id'
},
{
  component:ListMarksComponent,
  path:'list'
},
{
  path:'student',component:StudentLoginComponent
},
{ path: '', redirectTo: '/login', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
