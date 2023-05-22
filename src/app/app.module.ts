import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { ListMarksComponent } from './list-marks/list-marks.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule}  from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentLoginComponent } from './student-login/student-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMarksComponent,
    UpdateMarksComponent,
    ListMarksComponent,
    LoginComponent,
    RegisterComponent,
    StudentLoginComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
