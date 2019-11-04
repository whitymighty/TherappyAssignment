import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppointmentServiceProvider } from '../../providers/appointment-service';
import { DoctorsServiceProvider } from '../../providers/doctors-service';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  ap = {};
  today = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, public apService:AppointmentServiceProvider, public docService:DoctorsServiceProvider) {

  }
   getDoctor(){
     this.doctor = this.docService.getById(this.apo.doctor);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  ngOnInit(){
     this.apo = this.apService.apntment;
     console.log(this.apo);
    this.getDoctor();
  }

}
