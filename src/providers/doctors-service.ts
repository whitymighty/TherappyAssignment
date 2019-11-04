import { Injectable } from '@angular/core';
import {doctors} from '../providers/doctors-mock';

/*
  Generated class for the DoctorsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorsServiceProvider {
doctors: Array<any> = doctors;
findAll() {
  return Promise.resolve(doctors);
}
getAll() {
  return this.doctors;
}
findById(id) {
  return Promise.resolve(doctors[id]);
}
  getById(id) {
    for (var i = 0; i < this.doctors.length; i++) {
      if (this.doctors[i].id === parseInt(id)) {
        return this.doctors[i];
      }
    }
    return null;
  }

}
