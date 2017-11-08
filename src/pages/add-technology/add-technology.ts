import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, ActionSheetController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

import {Camera} from 'ionic-native';



@IonicPage()
@Component({
  selector: 'page-add-technology',
  templateUrl: 'add-technology.html'
})
export class AddTechnology {

    public base64Image: string;

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
   private baseURI               : string  = "http://ec2-13-59-123-174.us-east-2.compute.amazonaws.com/";
    
   // Initialise module classes
   constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController, 
               public platform   : Platform,
               public actionsheetCtrl: ActionSheetController,
               public zone       : NgZone) 
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
      this.resetFields();

      if(this.NP.get("record"))
      {
         this.isEdited      = true;
         this.selectEntry(this.NP.get("record"));
         this.pageTitle     = 'Edit entry';
      }
      else
      {
         this.isEdited      = false;
         this.pageTitle     = 'Bike-For-Rent';
      }
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



   // Save a new record that has been added to the page's HTML form
   // Use angular's http post method to submit the record data 
   // to our remote PHP script (note the body variable we have created which 
   // supplies a variable of key with a value of create followed by the key/value pairs
   // for the record data
   createEntry(bikeModel, bikeRate, Description)
   {
      let body     : string   = "key=create&bikeModel=" + bikeModel + "&bikeRate=" + bikeRate + "&Description=" + Description,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "bike-manage-data.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm   = true;
            this.sendNotification(`Congratulations the bike: ${bikeModel} was successfully added to Rent-A-Bike Page`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
    
   }



   // Update an existing record that has been edited in the page's HTML form
   // Use angular's http post method to submit the record data 
   // to our remote PHP script (note the body variable we have created which 
   // supplies a variable of key with a value of update followed by the key/value pairs
   // for the record data
   updateEntry(bikeModel, bikeRate, Description, bikeID)
   {
      let body       : string = "key=update&bikeModel=" + bikeModel + "&bikeRate=" + bikeRate + "&Description=" + this.Description + "&bikeID=" + this.bikeID,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any     = new Headers({ 'Content-Type': type}),
          options    : any     = new RequestOptions({ headers: headers }),
          url        : any     = this.baseURI + "bike-manage-data.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm  =  true;
            this.sendNotification(`Congratulations the bike: ${bikeModel} was successfully added to Rent-A-Bike Page`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }
   



//    // Remove an existing record that has been selected in the page's HTML form
//    // Use angular's http post method to submit the record data 
//    // to our remote PHP script (note the body variable we have created which 
//    // supplies a variable of key with a value of delete followed by the key/value pairs
//    // for the record ID we want to remove from the remote database
//    deleteEntry()
//    {
//       let bikeModel  : string = this.form.controls["bikeModel"].value,
//           body       : string    = "key=delete&bikeID=" + this.bikeID,
//           type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
//           headers    : any    = new Headers({ 'Content-Type': type}),
//           options    : any    = new RequestOptions({ headers: headers }),
//           url        : any    = this.baseURI + "bike-manage-data.php";

//       this.http.post(url, body, options)
//       .subscribe(data =>
//       {
//          // If the request was successful notify the user
//          if(data.status === 200)
//          {
//             this.hideForm     = true;
//             this.sendNotification(`Congratulations the bike: ${bikeModel} was successfully deleted`);
//          }
//          // Otherwise let 'em know anyway
//          else
//          {
//             this.sendNotification('Something went wrong!');
//          }
//       });
//    }



   // Handle data submitted from the page's HTML form
   // Determine whether we are adding a new record or amending an
   // existing record
   saveEntry()
   {
      let bikeModel      : string = this.form.controls["bikeModel"].value,
          bikeRate       : string = this.form.controls["bikeRate"].value,
          Description    : string = this.form.controls["Description"].value;

      if(this.isEdited)
      {
         this.updateEntry(bikeModel, bikeRate, Description, this.bikeID);
      }
      else
      {
         this.createEntry(bikeModel, bikeRate, Description);
         this.navCtrl.setRoot(HomePage);
      }
   }



   // Clear values in the page's HTML form fields
   resetFields() : void
   {
      this.bikeModel      = "";
      this.bikeRate       = ""; 
      this.Description    = ""; 
   }



   // Manage notifying the user of the outcome
   // of remote operations
   sendNotification(message)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
        //   duration      : 5000,
          showCloseButton: true,
          closeButtonText: 'Ok'
      });
      notification.present();
   }

   openMenu() {
    let actionsheet = this.actionsheetCtrl.create({
      title:"Choose Album",
      buttons:[{
      text: 'Camera',
      
      handler: () => {
          this.takePicture();
      console.log("Camera Clicked");
      }
      },{
      text: 'Gallery',
      handler: function(){
      console.log("Gallery Clicked");
      }
      }]
      });
      actionsheet.present();
     }

     takePicture(){
        Camera.getPicture({
            destinationType: 0,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
          // imageData is a base64 encoded string
          this.zone.run(() => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
          });
        }, (err) => {
            console.log(err);
        });
      }



}