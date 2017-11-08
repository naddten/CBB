import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

// import {User} from '../../models/user';
// import { AngularFireAuth } from "angularfire2/auth";
import { AlertController } from 'ionic-angular';

// import {HomePage} from '../home/home';

import * as firebase from 'firebase';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';



@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
  providers: [UsersserviceProvider]
})
export class SigninPage {

  public email: string;
  public password: string;
  // user = {} as User;
  
    // constructor(private ac:AlertController, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    // }

    constructor(public usersService: UsersserviceProvider, public loadingCtrl:LoadingController, public toastCtrl: ToastController,private ac:AlertController,public navCtrl: NavController, public navParams: NavParams) {
    }
  
    // presentAlert() {
    //   let alert = this.ac.create({
    //     title: 'Email or password is Invaild',
    //     subTitle: 'please Re-enter your email or password',
    //     buttons: ['ok']
    //   });
    //   alert.present();
    // }
  
    alert(message: string){
      this.ac.create({
        title: 'Info!',
        subTitle: message,
        buttons:['ok']      
      }).present();
    }
  
  //   async login(user:User) {
  // try {
  //   const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  // if(result.message == "auth/invalid-email") {
  //   console.log('invaild');
  //   // this.presentAlert();
  
  // }else{
  //   console.log('success');
  //   this.alert('Success! You\'re logged in')
  //   this.navCtrl.setRoot(HomePage);
    
  // }
  
  // }
  // catch(e) {
  //   // this.presentAlert();
  //   this.alert(e.message);
  //   this.user.email = "";
  //   this.user.password = "";
  
  // console.log('error');
  // }
  
  
  //   }
  
  
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SigninPage');
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){

    var that = this;

    var loader = this.loadingCtrl.create({
          content: "Logining Now..."
        });
        loader.present();

        this.usersService.loginUserService(this.email, this.password).then(authData => {
          //success
          loader.dismiss();
          that.navCtrl.setRoot(HomePage);

        }, error => {
          loader.dismiss();
          //Unable to log in
          let toast = this.toastCtrl.create({
            message:error,
            duration:3000,
            position: 'top'
          });
          toast.present();

          that.password = " "//empty the password field
        
        });

  }

  // googleSignIn(){
  //   this.usersService.googleSignInUser().then(() => {
  //     //success redirect
  //     let toast = this.toastCtrl.create({
  //       message: 'User account created successfully...',
  //       duration:3000
  //     });
  //     toast.present();

  //   });
  // }

  // forgotPassword(){

  // }

  redirectToSignup(){
    this.navCtrl.push(SignupPage);

  }

}
