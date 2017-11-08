import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PaymentPage } from '../payment/payment';


@IonicPage()
@Component({
  selector: 'page-viewbike',
  templateUrl: 'viewbike.html',
})
export class ViewbikePage {

   // Define FormBuilder /model properties
   public form                   : FormGroup;
   public bikeID         	 	 : any;
   public bikeModel         	 : any;
   public bikeRate  			 : any;
   public Description  			 : any;
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public userID               : any      = null;
    
   // Initialise module classes
   constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController) 
   {

      // Create form builder validation rules
      this.form = fb.group({
         "bikeModel"          : ["", Validators.required],
         "bikeRate"           : ["", Validators.required],
         "Description"        : ["", Validators.required]
      });
   }



   // Determine whether we adding or editing a record
   // based on any supplied navigation parameters
   ionViewWillEnter()
   {
      
         this.selectEntry(this.NP.get("record"));
         console.log("record");
         this.pageTitle     = 'Bike Details';
      
   }



   // Assign the navigation retrieved data to properties
   // used as models on the page's HTML form
   selectEntry(item)
   {
      this.bikeID        = item.bikeID;
      this.userID        = item.userID;
      this.bikeModel     = item.bikeModel;
      this.bikeRate      = item.bikeRate;
      this.Description   = item.Description;
   }

   goPayment(param){
     this.navCtrl.push('PaymentPage', param);
   }

}

