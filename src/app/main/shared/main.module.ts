import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


// Main Navigation Bar
import { SidenavListComponent } from './../navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './../navigation/header/header.component';

// Main App Router
import { MainRoutingModule } from './main-routing.module';

// Main App Module
import { MainComponent } from '../main.component';
import { VlogsComponent } from './../vlogs/vlogs.component';
import { VisitorsComponent } from './../visitors/visitors.component';
import { HostsComponent } from './../hosts/hosts.component';
import { CompaniesComponent } from './../companies/companies.component';
import { ClientlistsComponent } from './../clientlists/clientlists.component';

// Main App Dialog Modules
import { ConfirmClientDialogComponent } from '../clientlists/confirm-client-dialog/confirm-client-dialog.component';
import { ConfirmCompanyDialogComponent } from '../companies/confirm-company-dialog/confirm-company-dialog.component';
import { ConfirmHostDialogComponent } from '../hosts/confirm-host-dialog/confirm-host-dialog.component';
import { ConfirmVisitorDialogComponent } from '../visitors/confirm-visitor-dialog/confirm-visitor-dialog.component';
import { ConfirmVlogsDialogComponent } from '../vlogs/confirm-vlogs-dialog/confirm-vlogs-dialog.component';
import { EditClientDialogComponent } from '../clientlists/edit-client-dialog/edit-client-dialog.component';
import { EditCompanyDialogComponent } from '../companies/edit-company-dialog/edit-company-dialog.component';
import { EditHostDialogComponent } from '../hosts/edit-host-dialog/edit-host-dialog.component';
import { EditVisitorDialogComponent } from '../visitors/edit-visitor-dialog/edit-visitor-dialog.component';
import { EditVlogsDialogComponent } from '../vlogs/edit-vlogs-dialog/edit-vlogs-dialog.component';

// Main App Services
import { VisitorServices } from './../visitors/shared/visitors.service';
import { HostsServices } from './../hosts/shared/hosts.service';
import { ClientsServices } from './../clientlists/shared/clients.service';
import { CompaniesServices } from './../companies/shared/companies.service';
import { VLogsServices } from './../vlogs/shared/vlogs.service';
import { MaterialModule } from '../../shared/material.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    MainRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [
    MainComponent,
    ClientlistsComponent,
    CompaniesComponent,
    HostsComponent,
    VisitorsComponent,
    VlogsComponent,
    // Navigation
    SidenavListComponent,
    HeaderComponent,
    // Confirm Dialog Modules
    ConfirmClientDialogComponent,
    ConfirmCompanyDialogComponent,
    ConfirmHostDialogComponent,
    ConfirmVisitorDialogComponent,
    ConfirmVlogsDialogComponent,
    // Edit Dialog Modules
    EditClientDialogComponent,
    EditCompanyDialogComponent,
    EditHostDialogComponent,
    EditVisitorDialogComponent,
    EditVlogsDialogComponent
  ],
  providers: [
    // services
    VisitorServices,
    HostsServices,
    ClientsServices,
    CompaniesServices,
    VLogsServices,
  ],
  entryComponents: [
     // Confirm Dialog Modules
     ConfirmClientDialogComponent,
     ConfirmCompanyDialogComponent,
     ConfirmHostDialogComponent,
     ConfirmVisitorDialogComponent,
     ConfirmVlogsDialogComponent,
     // Edit Dialog Modules
     EditClientDialogComponent,
     EditCompanyDialogComponent,
     EditHostDialogComponent,
     EditVisitorDialogComponent,
     EditVlogsDialogComponent
  ]
})
export class MainModule { }

