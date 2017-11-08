import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;


@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){

    // In the following example, markers appear when the user clicks on the map.
      // Each marker is labeled with a single alphabetical character.
      var labels = '123456789';
      var labelIndex = 0;


  var json = [
    {
      "title": "Masjid Omar Ali Saifuddien",
      "lat": 4.889472,
      "lng": 114.939287,
      "description": "Masjid Omar Ali Saifuddien, Jalan Masjid Omar 'Ali Saifuddien, Bandar Seri Begawan BS8711, Brunei",
      "id": "Ubd Core"
    },
    {
      "title": "Mercu Dirgahayu 60",
      "lat": 4.88673,
      "lng": 114.942183,
      "description": "Mercu Dirgahayu 60, Jalan McArthur, Bandar Seri Begawan BS8111, Brunei",
      "id": "Ubd Core"
    },
    {
      "title": "Radisson Hotel",
      "lat": 4.8947,
      "lng": 114.942505,
      "description": "Radisson Hotel, Jln Tasek, Bandar Seri Begawan, Brunei",
      "id": "Ubd Core"
    },
    {
      "title": "Taman Haji Sir Muda Omar Ali Saifuddien",
      "lat": 4.889606,
      "lng": 114.941674,
      "description": "Taman Haji Sir Muda Omar Ali Saifuddien, Jln Elizabeth Dua, Bandar Seri Begawan BS8611, Brunei",
      "id": "Ubd Core"
    },
    {
      "title": "The Core",
      "lat": 4.979574,
      "lng": 114.898053,
      "description": "Ubd Core",
      "id": "Ubd Core"
    },  
    {
      "title": "UBD Chancellor's Hall",
      "lat":  4.971896,
      "lng": 114.892713,
      "description": "UBD Chancellor's Hall,Brunei",
      "id": "Ubd Core"
    },
    {
      "title": "University Sport Complex",
      "lat": 4.975071,
      "lng": 114.888024,
      "description": "Universiti Brunei Darussalam, Sport Complex",
      "id": "Ubd Core"
    },
    {
      "title": "UTB Multipurpose Hall",
      "lat": 4.980165,
      "lng": 114.902524,
      "description": "UTB MPH",
      "id": "Ubd Core"
    },
    {
      "title": "University Mosque",
      "lat": 4.977262,
      "lng": 114.895781,
      "description": "University Mosque Universiti Brunei Darussalam",
      "id": "Ubd Core"
    },
    ]

      
    var myLatlng = new google.maps.LatLng(4.89285, 114.941475);
    var mapOptions = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // Geo Location /
    var markerLabel = 'Me!';
    var markerIcon = {
    url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
    scaledSize: new google.maps.Size(60, 60),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0,60),
    labelOrigin: new google.maps.Point(30,22)
    };

    navigator.geolocation.getCurrentPosition(function(pos) {
        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            animation: google.maps.Animation.DROP,
            title: "My Location",
            icon: markerIcon,
            label: {
              text: markerLabel,
              color: "#000000",
              fontSize: "12px",
              fontWeight: "bold"
            }
        });
    });

    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0, length = json.length; i < length; i++) {
      var data = json[i],
          latLng = new google.maps.LatLng(data.lat, data.lng); 

      // Creating a marker and putting it on the map
      var marker = new google.maps.Marker({
        position: latLng,
        label: labels[labelIndex++ % labels.length],
        
        map: map,
        title: data.title
      });

      // Creating a closure to retain the correct data 
    //Note how I pass the current data in the loop into the closure (marker, data)
    (function(marker, data) {

      // Attaching a click event to the current marker
      google.maps.event.addListener(marker, "click", function(e) {
        infoWindow.setContent(data.title);
        infoWindow.open(map, marker);
      });

    })
    (marker, data);
    }


    }


    }

