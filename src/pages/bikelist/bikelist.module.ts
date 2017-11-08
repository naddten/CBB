import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BikelistPage } from './bikelist';

@NgModule({
  declarations: [
    BikelistPage,
  ],
  imports: [
    IonicPageModule.forChild(BikelistPage),
  ],
})
export class BikelistPageModule {}
