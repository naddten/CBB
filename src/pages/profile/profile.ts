import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { SigninPage } from '../signin/signin';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [UsersserviceProvider]

})
export class ProfilePage {

    // private userPhotoUrl: any;
    public userDisplayName: any;
    public userDisplayName1: any;
    public userPhone: any;
    public userEmail: any;
    public userAddress: any;

  constructor(public usersService: UsersserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    var myUserId = firebase.auth().currentUser.uid;
    
        this.displayUser(myUserId);
  }

  displayUser(theUserId){
    
        var that = this;
        this.usersService.viewUser(theUserId).then(bringout => {
    
          // that.userPhotoUrl = bringout.val().photo;
          that.userDisplayName = bringout.val().first_name;
          that.userDisplayName1 = bringout.val().last_name;
          that.userPhone = bringout.val().phone;
          that.userEmail = bringout.val().email;
          that.userAddress = bringout.val().address;
          
    
        })
      }
    
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

   logUserOut(){
    //call user service
    this.usersService.logoutUser().then(() => {
      this.navCtrl.setRoot(SigninPage);
    });
  }
  

 
}
