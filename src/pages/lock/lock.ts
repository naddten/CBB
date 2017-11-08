import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ToastController,  LoadingController } from 'ionic-angular';

import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-lock',
  templateUrl: 'lock.html',
})
export class LockPage {

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'yes', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};



  constructor(private theInAppBrowser: InAppBrowser, public navCtrl: NavController, public navParams: NavParams,  public toastCtrl  : ToastController, public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockPage');
  }

//   public openWithSystemBrowser(url : string){
//     let target = "_system";
//     this.theInAppBrowser.create(url,target,this.options);
// }

public openWithInAppBrowser(url : string){
  var loader = this.loadingCtrl.create({
      content: "Unlocking Dock",
      duration:5000
       });
      loader.present();

    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
    
    this.sendNotification(`Press again if unlocking fail.`);
}

public openWithInAppBrowser1(url : string){
  var loader = this.loadingCtrl.create({
    content: "Locking Dock",
    duration:5000
     });
    loader.present();

  let target = "_blank";
  this.theInAppBrowser.create(url,target,this.options);
  this.sendNotification(`Press again if locking fail.`);
}
public openWithCordovaBrowser(url : string){
    let target = "_self";
    this.theInAppBrowser.create(url,target,this.options);
}  

 // Manage notifying the user of the outcome
   // of remote operations
   sendNotification(message)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 5000

 
          // showCloseButton: true,
          // closeButtonText: 'Ok'
      });
      notification.present();
   }



}
