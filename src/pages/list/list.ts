import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { doctors } from '../../providers/doctors-mock';
import { reviews } from '../../providers/reviews-mock';
import { appointments } from '../../providers/appointments-mock';
import { AppointmentServiceProvider } from '../../providers/appointment-service';
import { DoctorsServiceProvider } from '../../providers/doctors-service';
import { DoctorProfilePage } from '../doctor-profile/doctor-profile';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
doctors: Array<any> = doctors;
  appointments: Array<any> = appointments;
    reviews: Array<any> = reviews;
  today = new Date();
  doct:any;
  available = [];
  sched = [];
  dr : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apService : AppointmentServiceProvider, public docService : DoctorsServiceProvider) {
    console.log(this.reviews);
  }
  goToDocProfile(id){
    this.navCtrl.push(DoctorProfilePage, {id:id});
  }
  getDoctorReview(doctor){
    let i = 0;
    let sum = 0;
    for(let review of this.reviews){
      if (review.doctor === doctor){
        sum = sum + review.score;
        i++;
      }
    }
    if(sum/i){
      return (sum/i).toFixed(2);
    } else {
      return "--";
    }
  }
  getApByDoctor(doctor){
    let x = this.apService.getByDoctorId(doctor);
    if (x){
      return x.starting;
    } else {
      return [];
    }
  }
  getNextFree(doctor){
    for (let doc of this.doctors){
      if(doc.id === doctor){
        let apList = this.getApByDoctor(doctor);
        if(apList !== []){
          let h = doc.workingHours.filter(x => !apList.includes(x))
          return h[0];
        } else {
          return doc.workingHours[0];
        }
      }
    }
  }
}
