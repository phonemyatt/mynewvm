import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VmsclientComponent } from '../vmsclient.component';



const childVmsClientRoutes: Routes = [{
    path: 'vmsclient',
    component: VmsclientComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(childVmsClientRoutes)],
    exports: [RouterModule],
    providers: []
})

export class VmsClientRoutingModule {}
