import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import{ environment } from './../environments/environment';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
>>>>>>> versionqr

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
          AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
=======
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    Base64ToGallery
>>>>>>> versionqr
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
