import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { MapsPage } from '../pages/maps/maps';
import { AboutPage } from '../pages/about/about';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { UserguidePage } from '../pages/userguide/userguide';
import { SePage } from '../pages/se/se';
import { ScanPage } from '../pages/scan/scan';
import { ProfilePage } from '../pages/profile/profile';
import { BikelistPage } from '../pages/bikelist/bikelist';
import { SearchdockingPage } from '../pages/searchdocking/searchdocking';
import { AlldockingPage } from '../pages/alldocking/alldocking';
import { DockingdetailPage } from '../pages/dockingdetail/dockingdetail';
import { AddTechnology } from '../pages/add-technology/add-technology';
import { LockPage } from '../pages/lock/lock';
import { SkipPage } from '../pages/skip/skip';
// import { PaymentPage } from '../pages/payment/payment';
import { BikedetailPage } from '../pages/bikedetail/bikedetail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import * as firebase from 'firebase';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

// Initialize Firebase
export const config = {
  apiKey: "AIzaSyDj_ql9ZQi8vGFycjM_qhVYJ15iM_KCXtU",
  authDomain: "fir-bike-69050.firebaseapp.com",
  databaseURL: "https://fir-bike-69050.firebaseio.com",
  projectId: "fir-bike-69050",
  storageBucket: "fir-bike-69050.appspot.com",
  messagingSenderId: "498163152704"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapsPage,
    AboutPage,
    SigninPage,
    SignupPage,
    UserguidePage,
    SePage,
    ScanPage,
    ProfilePage,
    BikelistPage,
    SearchdockingPage,
    AlldockingPage,
    DockingdetailPage,
    AddTechnology,
    LockPage,
    SkipPage,
    BikedetailPage,
    // PaymentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapsPage,
    AboutPage,
    SigninPage,
    SignupPage,
    UserguidePage,
    SePage,
    ScanPage,
    ProfilePage,
    BikelistPage,
    SearchdockingPage,
    AlldockingPage,
    DockingdetailPage,
    AddTechnology,
    LockPage,
    SkipPage,
    BikedetailPage,
    // PaymentPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider,
    InAppBrowser
  ]
})
export class AppModule {}
