import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VmsclientComponent } from '../vmsclient.component';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';

const childVmsClientRoutes: Routes = [{
    path: 'vmsclient',
    component: VmsclientComponent,
    children: [
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        { path: 'logout', component: LogoutComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(childVmsClientRoutes)],
    exports: [RouterModule],
    providers: []
})

export class VmsClientRoutingModule {}
