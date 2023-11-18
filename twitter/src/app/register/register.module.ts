import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RegisterFormComponent } from './register-form/register-form.component';

const routes = [
  {
    path: '',
    component: RegisterFormComponent
  },
];

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
