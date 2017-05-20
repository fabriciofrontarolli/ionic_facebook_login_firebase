import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    var config = {
      apiKey: "AIzaSyBh8DE0op2vcTpZURnHmDgWPC5F5DZpHYE",
      authDomain: "authentication-1c11d.firebaseapp.com",
      databaseURL: "https://authentication-1c11d.firebaseio.com",
      projectId: "authentication-1c11d",
      storageBucket: "authentication-1c11d.appspot.com",
      messagingSenderId: "510816963115"
    };
    firebase.initializeApp(config);


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
