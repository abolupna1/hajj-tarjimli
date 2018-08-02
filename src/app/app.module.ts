import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import{ListPage} from '../pages/list/list';
import{LangPage} from '../pages/lang/lang';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { CodePage } from  '../pages/code/code';
import{ FCM }from '@ionic-native/fcm';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CodePage,
    ListPage,LangPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CodePage,
    ListPage,
    LangPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
