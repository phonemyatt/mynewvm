import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomepageComponent } from './../homepage/homepage.component';
import { OptionspageComponent } from './../optionspage/optionspage.component';
import { HostpageComponent } from './../hostpage/hostpage.component';
import { VisitorpageComponent } from './../visitorpage/visitorpage.component';

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
    FlexLayoutModule,
    VmsClientRoutingModule,
    // HomepageComponent,
    // OptionspageComponent,
    // HostpageComponent,
    // VisitorpageComponent,
  ],
  exports: [
    HomepageComponent,
    OptionspageComponent,
    HostpageComponent,
    VisitorpageComponent,
  ],
  declarations: [
    HomepageComponent,
    OptionspageComponent,
    HostpageComponent,
    VisitorpageComponent,
  ],
  providers: [
    VmsClientServices
  ],
  entryComponents: [
  ]
})
export class VmsClientModule { }

