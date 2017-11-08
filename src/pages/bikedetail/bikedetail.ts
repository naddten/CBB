import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 


@IonicPage()
@Component({
  selector: 'page-bikedetail',
  templateUrl: 'bikedetail.html',
})
export class BikedetailPage {

  public items : any = []; 
  constructor(public navCtrl: NavController, public http: Http) {
  }

  ionViewWillEnter()
   {
      this.load();
   }

  // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()
   {
      this.http.get('http://ec2-13-59-123-174.us-east-2.compute.amazonaws.com/bike-retrieve-data.php')
      .map(res => res.json())
      .subscribe(data => 
      {
         this.items = data;         
      });
   }


   // Allow navigation to the AddTechnology page for creating a new entry
   addEntry()
   {
      this.navCtrl.push('ViewbikePage');
   }


   // Allow navigation to the AddTechnology page for amending an existing entry
   // (We supply the actual record to be amended, as this method's parameter, 
   // to the AddTechnology page
   viewEntry(param)
   {
      this.navCtrl.push('ViewbikePage', param);
   }


}
