import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> versionqr

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    LoginPageRoutingModule
=======
    LoginPageRoutingModule,
    ReactiveFormsModule
>>>>>>> versionqr
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
