import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, ActionSheetController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  

 // Define FormBuilder /model properties
 public form                   : FormGroup;
 public dockStation    	 	     : any;
 public hours       	         : any;
 public cardNumber  			     : any;
 public expiryDate  			     : Date;
 public securityCode 			     : any;
//  public bikeModel               : any;
 public bikeRate              : any;

 // Flag to be used for checking whether we are adding/editing an entry
 public isEdited               : boolean = false;
 // Flag to hide the form upon successful completion of remote operation
 public hideForm               : boolean = false;
 // Property to help ste the page title
 public pageTitle              : string;
 // Property to store the recordID for when an existing entry is being edited
 public userID                 : any      = null;
 private baseURI               : string  = "http://ec2-13-59-123-174.us-east-2.compute.amazonaws.com/";
  
 // Initialise module classes
 constructor(public navCtrl    : NavController,
             public http       : Http,
             public NP         : NavParams,
             public fb         : FormBuilder,
             public toastCtrl  : ToastController, 
             public platform   : Platform,
             public actionsheetCtrl: ActionSheetController) 
  {

    // Create form builder validation rules
    this.form = fb.group({
       "dockStation"          : ["", Validators.required],
       "hours"                : ["", Validators.required],
       "cardNumber"           : ["", Validators.required],
       "expiryDate"           : ["", Validators.required],
       "securityCode"         : ["", Validators.required]
    });
 }



 // Determine whether we adding or editing a record
 // based on any supplied navigation parameters
 ionViewWillEnter()
 {
    // this.resetFields();

       this.selectEntry(this.NP.get("record"));       
       this.pageTitle     = 'Edit entry';
  
 }



 // Assign the navigation retrieved data to properties
 // used as models on the page's HTML form
 selectEntry(item)
 {
    // this.bikeID        = item.bikeID;
    // this.userID        = item.userID;
    // this.bikeModel     = item.bikeModel;
    this.bikeRate         = item;
    // this.Description   = item.Description;
 }



 // Save a new record that has been added to the page's HTML form
 // Use angular's http post method to submit the record data 
 // to our remote PHP script (note the body variable we have created which 
 // supplies a variable of key with a value of create followed by the key/value pairs
 // for the record data
 createEntry(dockStation, hours, cardNumber, expiryDate, securityCode)
 {
    let body     : string   = "key=create&dockStation=" + dockStation + "&hours=" + hours + "&cardNumber=" + cardNumber + "&expiryDate=" + expiryDate + "&securityCode=" + securityCode, 
        type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
        headers  : any      = new Headers({ 'Content-Type': type}),
        options  : any      = new RequestOptions({ headers: headers }),
        url      : any      = this.baseURI + "payment-manage-data.php";

    this.http.post(url, body, options)
    .subscribe((data) =>
    {
       // If the request was successful notify the user
       if(data.status === 200)
       {
          this.hideForm   = true;
          this.sendNotification(`Payment was successfully paid. To unlock/lock the bike use Lock Menu.`);
       }
       // Otherwise let 'em know anyway
       else
       {
          this.sendNotification('Something went wrong!');
       }
    });
  
 }



 // Handle data submitted from the page's HTML form
 // Determine whether we are adding a new record or amending an
 // existing record
 saveEntry()
 {
    let dockStation      : string = this.form.controls["dockStation"].value,
        hours            : string = this.form.controls["hours"].value,
        cardNumber       : string = this.form.controls["cardNumber"].value,
        expiryDate       : Date = this.form.controls["expiryDate"].value,
        securityCode     : string = this.form.controls["securityCode"].value;

       this.createEntry(dockStation, hours, cardNumber,expiryDate,securityCode);

       this.navCtrl.setRoot(HomePage);

     
 }



 // Clear values in the page's HTML form fields
 resetFields() : void
 {
    this.dockStation      = "";
    this.hours       = ""; 
    this.cardNumber    = ""; 
    // this.expiryDate    = "";
    this.securityCode    = "";
 }



 // Manage notifying the user of the outcome
 // of remote operations
 sendNotification(message)  : void
 {
    let notification = this.toastCtrl.create({
        message       : message,
        // duration      : 5000,
        showCloseButton: true,
        closeButtonText: 'Ok'
    });
    notification.present();
 }



  goLock() {
    this.navCtrl.push("LockPage");
  }


}
