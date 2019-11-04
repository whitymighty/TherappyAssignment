import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { doctors } from '../../providers/doctors-mock';
import { reviews } from '../../providers/reviews-mock';
import { appointments } from '../../providers/appointments-mock';
import { ReviewsServiceProvider } from '../../providers/reviews-service';
import { AppointmentServiceProvider } from '../../providers/appointment-service';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the DoctorProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-doctor-profile',
  templateUrl: 'doctor-profile.html',
})
export class DoctorProfilePage {
  doctors:any;
  appointments:any;
  reviews:any;
  doctorId:string;
  doctor:any;
  today = new Date();
  appDay = "";
  sched = [];
  available = "";
  docReviews:any;
  freeSched = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public revService:ReviewsServiceProvider, public apService:AppointmentServiceProvider) {
    this.doctorId = navParams.get('id');
    this.doctors = doctors;
    this.appointments = appointments;
    this.reviews = reviews;
  }
  getDoctor(){
    for(let doc of this.doctors){
      if (doc.id === this.doctorId){
        this.doctor = doc;
      }
    }
    this.getDoctorReviews(this.doctorId)
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
  setAppDate(time){
    this.appDay = time;
    this.getFree(this.doctorId);
  }
  setApTime(time){
    this.available = time;
  }
  getReviewNumber(doctor){
    let count = 0;
    for (let rev of this.reviews){
      if (rev.doctor === doctor){
        count++;
      }
    }
    return count;
  }
  getDoctorReviews(doctor){
    this.docReviews = this.revService.getDoctorReviews(doctor);
    console.log(this.docReviews);
  }
  getApByDoctor(doctor){
    let x = this.apService.getByDoctorId(doctor);
    if (x){
      return x.starting;
    } else {
      return [];
    }
  }
  getFree(doctor){
    for (let doc of this.doctors){
      if(doc.id === doctor){
        let apList = this.getApByDoctor(doctor);
        if(apList !== []){
          this.freeSched = doc.workingHours.filter(x => !apList.includes(x))
        } else {
          this.freeSched = doc.workingHours;
        }
      }
    }
  }
  finalizeBook(){
    let apo = {
      "doctor": this.doctorId,
      "time" : this.available
    }
    this.apService.apntment = apo
    this.navCtrl.push(PaymentPage);
  }
  ngOnInit(){
    this.getDoctor();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorProfilePage');
  }

}
