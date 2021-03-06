import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { EmailVerifyPage } from '../email-verify/verify';


@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html'
})

export class VerifyPage {

  mobile;

  constructor(public navParams: NavParams,
              public navCtrl: NavController) {
    this.mobile = navParams.get("signup").mobile;
  }

  emailVerify() {
    this.navCtrl.push(EmailVerifyPage, {
      email: this.navParams.get("signup").email
    })
  }


}