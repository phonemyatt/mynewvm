import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material.module';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';

import { VmsClientServices } from './vmsclient.service';

import { VmsClientRoutingModule } from './vmsclient-routing.module';

// VMS Client Module


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    VmsClientRoutingModule,
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
  ],
  providers: [
    VmsClientServices
  ],
  entryComponents: [

  ]
})
export class VmsClientModule { }

