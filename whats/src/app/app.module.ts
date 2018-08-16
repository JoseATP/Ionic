import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ChatProvider } from '../providers/chat/chat';
import { ChatpagePage } from '../pages/chatpage/chatpage';

const config = {
  apiKey: "AIzaSyBGjtNGqFWF7NKpDpECLXALrZVZlVJLNz0",
  authDomain: "chat-d1980.firebaseapp.com",
  databaseURL: "https://chat-d1980.firebaseio.com",
  projectId: "chat-d1980",
  storageBucket: "chat-d1980.appspot.com",
  messagingSenderId: "879124086557"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatpagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatpagePage
  ],
  providers: [
    ChatProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider
  ]
})
export class AppModule {}
