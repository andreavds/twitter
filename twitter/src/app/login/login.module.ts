import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from '../services/auth.service'; 

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule
  ],
  providers: [
    AuthService
  ],
})
export class LoginModule { }
