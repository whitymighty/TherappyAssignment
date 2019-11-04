import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { doctors } from '../../providers/doctors-mock';

import { ListPage } from '../../pages/list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  doctors:any;
  constructor(public navCtrl: NavController) {
    this.doctors = doctors;
  }
  openDoctorsList(){
    this.navCtrl.push(ListPage);
  }

}
