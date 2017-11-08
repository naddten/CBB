import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewbikePage } from './viewbike';

@NgModule({
  declarations: [
    ViewbikePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewbikePage),
  ],
 exports: [
    ViewbikePage
  ] 
})
export class ViewbikePageModule {}
