import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserguidePage } from './userguide';

@NgModule({
  declarations: [
    UserguidePage,
  ],
  imports: [
    IonicPageModule.forChild(UserguidePage),
  ],
})
export class UserguidePageModule {}
