import { Injectable } from '@angular/core';
import {appointments} from '../providers/appointments-mock';

/*
  Generated class for the AppointmentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppointmentServiceProvider {
appointments: Array<any> = appointments;
today = new Date();
public apntment : any;
  findAll() {
    return Promise.resolve(appointments);
  }
  getAll() {
    return this.appointments;
  }
  findById(id) {
    return Promise.resolve(appointments[id]);
  }
	getById(id) {
		for (var i = 0; i < this.appointments.length; i++) {
  		if (this.appointments[i].id === parseInt(id)) {
  			return this.appointments[i];
  		}
  	}
  	return null;
  }
  getByDoctorId(doctor) {
		for (var i = 0; i < this.appointments.length; i++) {
  		if (this.appointments[i].doctor === parseInt(doctor)) {
  			return this.appointments[i];
  		}
  	}
  	return null;
  }
  findByDoctorId(doctor){
    let ap = [];
    for (var i = 0; i < this.appointments.length; i++) {
    let x = new Date(this.appointments[i].date)
    let d = x.getDate();
    let m = x.getMonth();
      if ((this.appointments[i].doctor === doctor)&&(this.today.getDate()<=d)&&(this.today.getMonth()<=m)) {
        ap.push(this.appointments[i]);
      }
    }
    return Promise.resolve(ap);
  }
}
