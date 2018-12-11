import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {TListPage} from '../pages/t-list/t-list';
import {SummaryPage} from '../pages/summary/summary';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from '../providers/firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDCVOxJZ8iPSdOCQ4CFA8mRQ0eVBaTAhzk",
    authDomain: "ass4-5.firebaseapp.com",
    databaseURL: "https://ass4-5.firebaseio.com",
    projectId: "ass4-5",
    storageBucket: "ass4-5.appspot.com",
    messagingSenderId: "19088018583"
  }
  
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TListPage,
    SummaryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TListPage,
    SummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {
  
}
