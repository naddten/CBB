import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SePage } from '../se/se';


@IonicPage()
@Component({
  selector: 'page-userguide',
  templateUrl: 'userguide.html',
})
export class UserguidePage {

  // list=['Register','How to register','What to do','Report','Contact us'];
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        'title': 'Registration',
        'description': 'To register to the app, you need to fill in the First name, Last name, Email, Phone number and Password. ',
        'description1': ' When all information is available, click on Register button.',
        'desc' : 'How do I log in?',
        'desc1': 'Enter your email and password that have you registered. Then click on Login button.'
      },
      {
        'title': 'Using a CBB bike',
        'description': 'Choose a bike from Rent-A-Bike menu button. ',
        'description1': 'Then choose  where will you dock the bicycle and proceed to payment',
        'desc': 'How do I unlock the bike?',
        'desc1': 'After payment process, you will be able to unlock using the app. '
      },
      {
        'title': 'Report',
        'description': 'Let us know of any CBB bikes, broken bicycle, or illegal parking activities via text message to +673 8870514.',
        'description1': 'Please let us know the location of the bike by texting us  and include a photo of the bike.',
        'color': '#78BD43'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(SePage, { item: item });
}



  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad UserguidePage');
  // }

  // nav(item){
  //   this.navCtrl.push(SePage,{
  //     'value' : item
  //   })
  // }

}
