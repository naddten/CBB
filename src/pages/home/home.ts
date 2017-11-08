import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { SigninPage } from '../signin/signin';
import { ProfilePage } from '../profile/profile';

// import { Geofence, Geolocation, SMS } from 'ionic-native';
// import { MapsPage } from '../maps/maps';



// import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UsersserviceProvider]
})
export class HomePage {

  // radius: number = 100;
  // error: any;
  // success: any;


  constructor(public usersService: UsersserviceProvider, public navCtrl: NavController, private platform: Platform) {
    // this.platform.ready().then(() => {
    //   Geofence.initialize().then(
        
    //     () => console.log('Geofence Plugin Ready'),
    //     (err) => console.log(err)
    //   );
    // });

 
  }

  // setGeofence(value: number) {
    
  //       Geolocation.getCurrentPosition({
  //         enableHighAccuracy: true
  //       }).then((resp) => {
  //         var longitude = resp.coords.longitude;
  //         var latitude = resp.coords.latitude;
  //         var radius = value;
    
  //         let fence = {
  //             id: "myGeofenceID1", 
  //             latitude:       latitude, 
  //             longitude:      longitude,
  //             radius:         radius,  
  //             transitionType: 3
  //           }
          
  //           Geofence.addOrUpdate(fence).then(
  //             () => this.success = true,
  //             (err) => this.error = "Failed to add or update the fence."
  //           );
    
  //           Geofence.onTransitionReceived().subscribe(resp => {
  //             SMS.send('+6737270716', 'You has leave from the radius parameter!');
  //           });
    
  //           this.navCtrl.push(MapsPage);
    
    
  //       }).catch((error) => {
  //         this.error = error;
  //       });
  //     }


  logUserOut(){
    //call user service
    this.usersService.logoutUser().then(() => {
      this.navCtrl.setRoot(SigninPage);
    });
  }

  profile(){
    this.navCtrl.setRoot(ProfilePage);
  }

}
