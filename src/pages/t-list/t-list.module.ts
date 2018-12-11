import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TListPage } from './t-list';

@NgModule({
  declarations: [
    TListPage,
  ],
  imports: [
    IonicPageModule.forChild(TListPage),
  ],
})
export class TListPageModule {}
