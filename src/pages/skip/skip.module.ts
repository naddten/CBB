import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkipPage } from './skip';

@NgModule({
  declarations: [
    SkipPage,
  ],
  imports: [
    IonicPageModule.forChild(SkipPage),
  ],
})
export class SkipPageModule {}
