import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-se',
  templateUrl: 'se.html',
})
export class SePage {
  
//  info :any;
 item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.info = this.navParams.get('value')
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SePage');
  }

}
