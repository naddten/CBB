import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { DockingdetailPage } from '../dockingdetail/dockingdetail';
import { MapsPage } from '../maps/maps';

 


@IonicPage()
@Component({
  selector: 'page-searchdocking',
  templateUrl: 'searchdocking.html',
})
export class SearchdockingPage {

  items = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();

  }

  openNavDetailsPage(item) {
    this.navCtrl.push(DockingdetailPage, { item: item });
}
 

  initializeItems() {

    this.items = [
      {
        "name": "Masjid Omar Ali Saifuddien",
        "lat": 4.889472,
        "lng": 114.939287,
        "area" : "Bandar Seri Begawan",
        "address": "Jalan Masjid Omar 'Ali Saifuddien, Bandar Seri Begawan BS8711, Brunei",
        "id": "1"
      },    
      {
        "name": "Mercu Dirgahayu 60",
        "lat": 4.88673,
        "lng":  114.942183,
        "area" : "Bandar Seri Begawan",
        "address": "Jalan McArthur, Bandar Seri Begawan BS8111, Brunei",
        "id": "2"
      },
      {
        "name": "Radisson Hotel",
        "lat":  4.8947,
        "lng": 114.942505,
        "area" : "Bandar Seri Begawan",
        "address": "Jln Tasek, Bandar Seri Begawan, Brunei",
        "id": "3"
      },
      {
        "name": "Taman Haji Sir Muda Omar Ali Saifuddien",
        "lat": 4.889606,
        "lng": 114.941674,
        "area" : "Bandar Seri Begawan",
        "address": "Jln Elizabeth Dua, Bandar Seri Begawan BS8611, Brunei",
        "id": "4"
      },
      {
        "name": "The Core",
        "lat": 4.979574,
        "lng": 114.898053,
        "area" : "Tungku Link",
        "address": "UBD Core, Jalan Universiti",
        "id": "5"
      },
      {
        "name": "UBD Chancellor's Hall",
        "lat": 4.971896,
        "lng": 114.892713,
        "area" : "Tungku Link",
        "address": "UBD Chancellor's Hall,Brunei",
        "id": "6"
      },
      {
        "name": "UBD Sport Complex",
        "lat": 4.975071,
        "lng": 114.888024,
        "area" : "Tungku Link",
        "address": "Universiti Brunei Darussalam, Sport Complex",
        "id": "7"
      },
      {
        "name": "UTB Multipurpose Hall",
        "lat": 4.980165,
        "lng": 114.902524,
        "area" : "Tungku Link",
        "address": "UTB Hall",
        "id": "8"
      },
      {
        "name": "University Mosque",
        "lat": 4.977262,
        "lng": 114.895781,
        "area" : "Tungku Link",
        "address": "University Mosque Universiti Brunei Darussalam",
        "id": "9"
      }
    ]

  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
       
      })
    }
    
}

maps(){
  this.navCtrl.setRoot(MapsPage);
}

  
}
