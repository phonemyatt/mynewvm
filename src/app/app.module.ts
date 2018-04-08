import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular firebase
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
export const firebaseConfig = environment.firebaseConfig;

// Module
import { WelcomeComponent } from './welcome/welcome.component';
import { VmsclientComponent } from './vmsclient/vmsclient.component';

// Main Module
import { AppRoutingModule } from './shared/app-routing.module';
import { MainModule } from './main/shared/main.module';
import { VmsClientModule } from './vmsclient/shared/vmsclient.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VmsclientComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    // Form
    FormsModule,
    ReactiveFormsModule,
    // From the latest master, HttpClientModule is required instead
    // Your other modules
    // Take note that you have to import MatIconModule into your app
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MainModule,
    VmsClientModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
  }
}
