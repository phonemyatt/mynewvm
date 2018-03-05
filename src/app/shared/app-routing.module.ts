import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './../welcome/welcome.component';
import { MainComponent } from './../main/main.component';
import { VmsclientComponent } from './../vmsclient/vmsclient.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'vmsclient', component: VmsclientComponent},
    { path: 'main', component: MainComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
