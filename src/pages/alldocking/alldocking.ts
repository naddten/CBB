import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';

import { SearchdockingPage } from '../searchdocking/searchdocking';
 
declare var google;

   // Each marker is labeled with a single alphabetical character.
   var labels = '123456789';
   var labelIndex = 0;

@IonicPage()
@Component({
  selector: 'page-alldocking',
  templateUrl: 'alldocking.html',
})
export class AlldockingPage {

  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  dockingList = [];




  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public http: Http) {
    this.dockingList = navParams.get('dockingList');
    console.log(this.dockingList);
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(4.889622, 114.941669);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {
    for (let _i = 0; _i < this.dockingList.length; _i++) {
      if(_i > 0 )
       this.addMarkersToMap(this.dockingList[_i]);
    }
  }

  addMarkersToMap(docking) {
      var position = new google.maps.LatLng(docking.latitude, docking.longitude);
      var dockingMarker = new google.maps.Marker({position: position, title: docking.name,label: labels[labelIndex++ % labels.length],
      });
      dockingMarker.setMap(this.map);
  }

  klist(){
    this.navCtrl.push(SearchdockingPage)
  }

}
