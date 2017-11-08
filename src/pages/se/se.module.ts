import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SePage } from './se';

@NgModule({
  declarations: [
    SePage,
  ],
  imports: [
    IonicPageModule.forChild(SePage),
  ],
})
export class SePageModule {}
