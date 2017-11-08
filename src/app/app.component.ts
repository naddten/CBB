import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps/maps';
import { AboutPage } from '../pages/about/about';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { UserguidePage } from '../pages/userguide/userguide';
import { ScanPage } from '../pages/scan/scan';
import { ProfilePage } from '../pages/profile/profile';
import { BikelistPage } from '../pages/bikelist/bikelist';
import { SearchdockingPage } from '../pages/searchdocking/searchdocking';
import { AlldockingPage } from '../pages/alldocking/alldocking';
import { DockingdetailPage } from '../pages/dockingdetail/dockingdetail';
import { LockPage } from '../pages/lock/lock';
import { AddTechnology } from '../pages/add-technology/add-technology';
import { PaymentPage } from '../pages/payment/payment';
import { SkipPage } from '../pages/skip/skip';

import { BikedetailPage } from '../pages/bikedetail/bikedetail';


import * as firebase from 'firebase';


export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  appMenuItems: Array<MenuItem>;
  appMenuItems1: Array<MenuItem>;
  
  accountMenuItems: Array<MenuItem>;
  
  helpMenuItems: Array<MenuItem>;

  lockMenuItems: Array<MenuItem>;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.initializeApp();

    var that = this;  
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        that.rootPage = HomePage;
        // ...
      } else {
        // User is signed out.
        that.rootPage = SigninPage;
        // that.rootPage = SkipPage;
        // ...
      }
    });

    // // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage, icon: 'home' },
    //   { title: 'List', component: ListPage, icon: 'home' },
    //   { title: 'Map', component: MapsPage, icon: 'map' },
    //   { title: 'About', component: AboutPage, icon: 'home' },
    //   { title: 'Scan', component: ScanPage, icon: 'camera' },
    //   { title: 'User Guide', component: UserguidePage, icon: 'home' },
    //   { title: 'Logout', component: HomePage, icon: 'log-out'},
    // ];

    
    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Map', component: MapsPage, icon : 'map'},
      {title: 'Docking Station', component: SearchdockingPage, icon: 'navigate'},
      {title: 'Bike-For-Rent', component: AddTechnology, icon: 'people'},      
      {title: 'Rent-A-Bike', component: BikedetailPage, icon: 'bicycle'},
      // {title: 'List of Bike', component: BikelistPage, icon: 'bicycle'},
      {title: 'Lock', component: LockPage, icon: 'lock'}
  ];

  this.appMenuItems1 = [
    {title: 'Home', component: HomePage, icon: 'home'},
    {title: 'Map', component: MapsPage, icon : 'map'},
    {title: 'Docking Station', component: SearchdockingPage, icon: 'navigate'},
    {title: 'Bike-For-Rent', component: AddTechnology, icon: 'people'},      
    {title: 'Rent-A-Bike', component: BikedetailPage, icon: 'bicycle'},
    // {title: 'List of Bike', component: BikelistPage, icon: 'bicycle'},
    {title: 'Lock', component: LockPage, icon: 'lock'}
];

  this.accountMenuItems = [
      {title: 'My Profile', component: ProfilePage, icon: 'person'},
      //{title: 'Logout', component: SigninPage, icon: 'log-out'},
  ];

  this.helpMenuItems = [
      {title: 'User Guide', component: UserguidePage, icon: 'help'},
      {title: 'About', component: AboutPage, icon: 'information-circle'},
  ];

//   this.lockMenuItems = [
//     {title: 'Lock', component: LockPage, icon: 'lock'}
// ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
