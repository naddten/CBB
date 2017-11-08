import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
// import {User} from '../../models/user';
// import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';
import { SigninPage } from '../signin/signin';

import * as firebase from 'firebase';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UsersserviceProvider]
})
export class SignupPage {

   // public skills : string;
   public email : string;
   public phone : any;
   public password : any;
   public first_name : any;
   public last_name : any;
   public address : any;
   // public city : any;
   // public state : any;
   // public country : any;
   // public isJobSeeker : boolean;

  // user = {} as User;
  // constructor(private ac:AlertController, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  // }

  constructor(public usersserviceProvider: UsersserviceProvider, public loadingCtrl:LoadingController, public toastCtrl: ToastController, private ac:AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  presentAlert() {
    let alert = this.ac.create({
      title: 'Email or password is empty',
      subTitle: 'please enter your email or password',
      buttons: ['ok']
    });
    alert.present();
  }

  // async reg(user:User) {
  //   try {
  // const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
  // console.log(result);
  // this.navCtrl.setRoot(HomePage);
  
  //   }
  //   catch(e) {
  //     this.presentAlert();
  //     this.user.email = "";
  //     this.user.password = "";
    
  //     console.error(e);
  //   }
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup(){
    
        var   account = {
          first_name: this.first_name,
          last_name: this.last_name || '',
          // skills: this.skills || '',
          email: this.email,
          phone: this.phone || '',
          password: this.password,
          address: this.address,
          // city: this.city || '',
          // state: this.state || '',
          // country: this.country || '',
          // isJobSeeker : this.country || ''
    
        };
    var that = this;
    
    var loader = this.loadingCtrl.create({
          content: "Registering Now...",
          
        });
        loader.present();
    
    
        this.usersserviceProvider.signupUserService(account).then(authData => {
          //successful
          loader.dismiss();
          that.navCtrl.setRoot(HomePage);
    
        }, error => {
    loader.dismiss();
         // Unable to log in
          let toast = this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'top'
          });
          toast.present();
    
          that.password = ""//empty the password field
    
        });
    
        
      }

}
