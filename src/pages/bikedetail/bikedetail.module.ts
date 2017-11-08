import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BikedetailPage } from './bikedetail';
import { LockPage } from '../lock/lock';

@NgModule({
  declarations: [
    BikedetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BikedetailPage),
  ],
  exports: [
    LockPage
  ]
})
export class BikedetailPageModule {}
