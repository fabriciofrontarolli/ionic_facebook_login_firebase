import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import firebase from 'firebase';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    Facebook,
    GooglePlus
  ]
})
export class LoginPage {

  userProfile: any = null;

  constructor(private fb: Facebook, private googlePlus: GooglePlus, public navCtrl: NavController, public navParams: NavParams) { }

  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
           .then((response) => {
             const facebookCredential = firebase.auth
                                                .FacebookAuthProvider
                                                .credential(response.authResponse.accessToken);

            firebase.auth().signInWithCredential(facebookCredential)
                            .then((success) => {
                              console.log("Firebase success: " + JSON.stringify(success));
                              this.userProfile = success;
                            })
                            .catch((error) => {
                              console.log("Firebase failure: " + JSON.stringify(error));
                          });

           })
           .catch(e => console.log('Error logging into Facebook', e))
           .then(() => {
             this.navCtrl.setRoot(HomePage);
           });
  }

  loginGoogle() {
    this.googlePlus.login({})
                   .then(res => console.log(res))
                   .catch(err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
