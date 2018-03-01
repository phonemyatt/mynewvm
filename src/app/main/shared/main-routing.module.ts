import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '../main.component';

import { CompaniesComponent } from '../companies/companies.component';
import { VlogsComponent } from '../vlogs/vlogs.component';
import { VisitorsComponent } from '../visitors/visitors.component';
import { HostsComponent } from '../hosts/hosts.component';
import { ClientlistsComponent } from '../clientlists/clientlists.component';

const mainRoutes: Routes = [{
    path: 'main',
    component: MainComponent,
    children: [
        { path: 'companies', component: CompaniesComponent },
        { path: 'logs', component: VlogsComponent },
        { path: 'visitors', component: VisitorsComponent },
        { path: 'hosts', component: HostsComponent },
        { path: 'clients', component: ClientlistsComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
    providers: []
})
export class MainRoutingModule {}
