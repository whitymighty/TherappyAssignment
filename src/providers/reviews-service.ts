import { Injectable } from '@angular/core';
import {reviews} from '../providers/reviews-mock';

/*
  Generated class for the ReviewsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewsServiceProvider {
  reviews: Array<any> = reviews;
  today = new Date();
    findAll() {
      return Promise.resolve(reviews);
    }
    getAll() {
      return this.reviews;
    }
    findById(id) {
      return Promise.resolve(reviews[id]);
    }
  	getById(id) {
  		for (var i = 0; i < this.reviews.length; i++) {
    		if (this.reviews[i].id === parseInt(id)) {
    			return this.reviews[i];
    		}
    	}
    	return null;
    }
    getDoctorReviews(doc){
      let x =[];
      for (let rev of this.reviews){
        if (rev.doctor === doc){
          x.push(rev);
        }
      }
      console.log(x);
      return x;
    }

}
