webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_doctors_mock__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reviews_mock__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appointments_mock__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appointment_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_doctors_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctor_profile_doctor_profile__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, apService, docService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apService = apService;
        this.docService = docService;
        this.doctors = __WEBPACK_IMPORTED_MODULE_2__providers_doctors_mock__["a" /* doctors */];
        this.appointments = __WEBPACK_IMPORTED_MODULE_4__providers_appointments_mock__["a" /* appointments */];
        this.reviews = __WEBPACK_IMPORTED_MODULE_3__providers_reviews_mock__["a" /* reviews */];
        this.today = new Date();
        this.available = [];
        this.sched = [];
        console.log(this.reviews);
    }
    ListPage.prototype.goToDocProfile = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__doctor_profile_doctor_profile__["a" /* DoctorProfilePage */], { id: id });
    };
    ListPage.prototype.getDoctorReview = function (doctor) {
        var i = 0;
        var sum = 0;
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var review = _a[_i];
            if (review.doctor === doctor) {
                sum = sum + review.score;
                i++;
            }
        }
        if (sum / i) {
            return (sum / i).toFixed(2);
        }
        else {
            return "--";
        }
    };
    ListPage.prototype.getApByDoctor = function (doctor) {
        var x = this.apService.getByDoctorId(doctor);
        if (x) {
            return x.starting;
        }
        else {
            return [];
        }
    };
    ListPage.prototype.getNextFree = function (doctor) {
        var _loop_1 = function (doc) {
            if (doc.id === doctor) {
                var apList_1 = this_1.getApByDoctor(doctor);
                if (apList_1 !== []) {
                    var h = doc.workingHours.filter(function (x) { return !apList_1.includes(x); });
                    return { value: h[0] };
                }
                else {
                    return { value: doc.workingHours[0] };
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.doctors; _i < _a.length; _i++) {
            var doc = _a[_i];
            var state_1 = _loop_1(doc);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card class="docCard" *ngFor="let doctor of doctors">\n      <ion-grid>\n  <ion-row>\n    <ion-col text-center size="6">\n    <img class="protrait" src={{doctor.picture}}/>\n    {{getDoctorReview(doctor.id)}}<ion-icon name="star-outline"></ion-icon>\n    </ion-col>\n    <ion-col text-center size="3">\n          {{doctor.name}}\n          <div class="scroll" scrollX="true">\n        <p class="sub" *ngFor="let spec of doctor.specialties">{{spec}},</p>\n        </div>\n      <p class="sub">{{doctor.language}}</p>\n    </ion-col>\n    <ion-col text-center size="2">\n      <p class="sub">{{doctor.rate}}/hr</p>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n    <ion-card-content>\n      <ion-grid>\n  <ion-row>\n    <ion-col *ngIf ="doctor" size="8">\n      Available at {{getNextFree(doctor.id)}}\n    </ion-col>\n    <ion-col>\n      </ion-col>\n    <ion-col size="4">\n      <span class="booking" tappable (click)="goToDocProfile(doctor.id)">BOOK NOW</span>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_appointment_service__["a" /* AppointmentServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_doctors_service__["a" /* DoctorsServiceProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reviews; });
var reviews = [
    {
        "id": 0,
        "user": "Anon",
        "location": "Doha",
        "score": 4,
        "text": "This is a review for the good doctor who helped me",
        "date": "October,2019",
        "doctor": 0
    },
    {
        "id": 1,
        "user": "Anon",
        "location": "Doha",
        "score": 3,
        "text": "This is a review for the good doctor who helped me",
        "date": "June,2019",
        "doctor": 0
    },
    {
        "id": 2,
        "user": "Anon",
        "location": "Doha",
        "score": 3,
        "text": "This is a review for the good doctor who helped me",
        "date": "February,2019",
        "doctor": 0
    },
    {
        "id": 3,
        "user": "Anon",
        "location": "Doha",
        "score": 5,
        "text": "This is a review for the good doctor who helped me",
        "date": "October,2019",
        "doctor": 1
    },
    {
        "id": 4,
        "user": "Anon",
        "location": "Doha",
        "score": 5,
        "text": "This is a review for the good doctor who helped me",
        "date": "June,2019",
        "doctor": 1
    }
];
//# sourceMappingURL=reviews-mock.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/payment/payment.module": [
		155
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appointment_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_doctors_service__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, apService, docService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apService = apService;
        this.docService = docService;
        this.ap = {};
        this.today = new Date();
    }
    PaymentPage.prototype.getDoctor = function () {
        this.doctor = this.docService.getById(this.apo.doctor);
    };
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.ngOnInit = function () {
        this.apo = this.apService.apntment;
        console.log(this.apo);
        this.getDoctor();
    };
    var _a, _b, _c, _d;
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="docCard">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <b>Appointment Details</b>\n        </ion-col>\n        <ion-col>\n\n        </ion-col>\n        <ion-col>\n          <span class="blue">CHANGE</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n  <ion-row>\n  <ion-col text-center size="6">\n  <img class="protrait" src={{doctor.picture}}/>\n  </ion-col>\n  <ion-col>\n    {{doctor.name}}\n  </ion-col>\n  <ion-col text-center size="2">\n    <p class="sub">{{doctor.rate}}<span class="grey">/hr</span></p>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n  <ion-card-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-icon name="calendar"></ion-icon> <span class="grey">{{today | date: "yyyy/MM/dd"}}</span>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="time"></ion-icon> <span class="grey">{{apo.time}}:00</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-card-content>\n  </ion-card>\n  Payment Details\n  <ion-item>\n      1 hour session <span text-right class="right"></span>{{doctor.rate}}QR\n  </ion-item>\n  <ion-item>\n  Total Amount <span class="blue right">{{doctor.rate}}QR</span>\n</ion-item>\n  <span class="grey">One session will be deducted from your Package if you choose the package payment method</span>\n  <ion-item>\n  <ion-label>Choose Payment Method</ion-label>\n<ion-select>\n  <ion-option value="tod">Cash</ion-option>\n  <ion-option value="tom">Package</ion-option>\n</ion-select>\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_appointment_service__["a" /* AppointmentServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_appointment_service__["a" /* AppointmentServiceProvider */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_doctors_service__["a" /* DoctorsServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_doctors_service__["a" /* DoctorsServiceProvider */]) === "function" ? _d : Object])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_doctors_mock__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.doctors = __WEBPACK_IMPORTED_MODULE_2__providers_doctors_mock__["a" /* doctors */];
    }
    HomePage.prototype.openDoctorsList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n  <ion-col>\n    <ion-row>\n  <ion-card class="cntnt" tappable (click)="openDoctorsList()">\n    <img class="thmb" src="assets/imgs/list.jpg">\n    <ion-card-title>List of Fictional Doctors</ion-card-title>\n  </ion-card>\n    </ion-row>\n    </ion-col>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_doctors_mock__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the DoctorsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DoctorsServiceProvider = /** @class */ (function () {
    function DoctorsServiceProvider() {
        this.doctors = __WEBPACK_IMPORTED_MODULE_1__providers_doctors_mock__["a" /* doctors */];
    }
    DoctorsServiceProvider.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__providers_doctors_mock__["a" /* doctors */]);
    };
    DoctorsServiceProvider.prototype.getAll = function () {
        return this.doctors;
    };
    DoctorsServiceProvider.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__providers_doctors_mock__["a" /* doctors */][id]);
    };
    DoctorsServiceProvider.prototype.getById = function (id) {
        for (var i = 0; i < this.doctors.length; i++) {
            if (this.doctors[i].id === parseInt(id)) {
                return this.doctors[i];
            }
        }
        return null;
    };
    DoctorsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DoctorsServiceProvider);
    return DoctorsServiceProvider;
}());

//# sourceMappingURL=doctors-service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_doctors_mock__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reviews_mock__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appointments_mock__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_reviews_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appointment_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__payment_payment__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DoctorProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorProfilePage = /** @class */ (function () {
    function DoctorProfilePage(navCtrl, navParams, revService, apService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.revService = revService;
        this.apService = apService;
        this.today = new Date();
        this.appDay = "";
        this.sched = [];
        this.available = "";
        this.freeSched = [];
        this.doctorId = navParams.get('id');
        this.doctors = __WEBPACK_IMPORTED_MODULE_2__providers_doctors_mock__["a" /* doctors */];
        this.appointments = __WEBPACK_IMPORTED_MODULE_4__providers_appointments_mock__["a" /* appointments */];
        this.reviews = __WEBPACK_IMPORTED_MODULE_3__providers_reviews_mock__["a" /* reviews */];
    }
    DoctorProfilePage.prototype.getDoctor = function () {
        for (var _i = 0, _a = this.doctors; _i < _a.length; _i++) {
            var doc = _a[_i];
            if (doc.id === this.doctorId) {
                this.doctor = doc;
            }
        }
        this.getDoctorReviews(this.doctorId);
    };
    DoctorProfilePage.prototype.getDoctorReview = function (doctor) {
        var i = 0;
        var sum = 0;
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var review = _a[_i];
            if (review.doctor === doctor) {
                sum = sum + review.score;
                i++;
            }
        }
        if (sum / i) {
            return (sum / i).toFixed(2);
        }
        else {
            return "--";
        }
    };
    DoctorProfilePage.prototype.setAppDate = function (time) {
        this.appDay = time;
        this.getFree(this.doctorId);
    };
    DoctorProfilePage.prototype.setApTime = function (time) {
        this.available = time;
    };
    DoctorProfilePage.prototype.getReviewNumber = function (doctor) {
        var count = 0;
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var rev = _a[_i];
            if (rev.doctor === doctor) {
                count++;
            }
        }
        return count;
    };
    DoctorProfilePage.prototype.getDoctorReviews = function (doctor) {
        this.docReviews = this.revService.getDoctorReviews(doctor);
        console.log(this.docReviews);
    };
    DoctorProfilePage.prototype.getApByDoctor = function (doctor) {
        var x = this.apService.getByDoctorId(doctor);
        if (x) {
            return x.starting;
        }
        else {
            return [];
        }
    };
    DoctorProfilePage.prototype.getFree = function (doctor) {
        var _loop_1 = function (doc) {
            if (doc.id === doctor) {
                var apList_1 = this_1.getApByDoctor(doctor);
                if (apList_1 !== []) {
                    this_1.freeSched = doc.workingHours.filter(function (x) { return !apList_1.includes(x); });
                }
                else {
                    this_1.freeSched = doc.workingHours;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.doctors; _i < _a.length; _i++) {
            var doc = _a[_i];
            _loop_1(doc);
        }
    };
    DoctorProfilePage.prototype.finalizeBook = function () {
        var apo = {
            "doctor": this.doctorId,
            "time": this.available
        };
        this.apService.apntment = apo;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__payment_payment__["a" /* PaymentPage */]);
    };
    DoctorProfilePage.prototype.ngOnInit = function () {
        this.getDoctor();
    };
    DoctorProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorProfilePage');
    };
    var _a, _b, _c, _d;
    DoctorProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctor-profile',template:/*ion-inline-start:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\pages\doctor-profile\doctor-profile.html"*/'<!--\n  Generated template for the DoctorProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Doctor-profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n  <ion-row>\n  <ion-col size="6">\n  <img class="protrait" src={{doctor.picture}}/>\n  {{getDoctorReview(doctor.id)}}<ion-icon name="star-outline"></ion-icon>\n  </ion-col>\n  <ion-col size="3">\n      {{doctor.name}}\n      <div class="scroll" scrollX="true">\n    <p class="sub" *ngFor="let spec of doctor.specialties">{{spec}},</p>\n    </div>\n  <p class="sub">{{doctor.language}}</p>\n  </ion-col>\n  <ion-col size="2">\n  <p class="sub">{{doctor.rate}}/hr</p>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n    <p>About Me:</p>\n    <p>{{doctor.description}}</p>\n    <hr>\n    <ion-item>\n      <span class="spc" *ngFor="let spec of doctor.specialties">{{spec}}</span>\n    </ion-item>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\'2\'><ion-icon class="cnct" name="chatbubbles"></ion-icon>Chat</ion-col>\n          <ion-col size=\'5\'><ion-icon class="cnct" name="videocam"></ion-icon>Video Call</ion-col>\n          <ion-col size=\'5\'><ion-icon class="cnct" name="call"></ion-icon>Audio Call</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item>\n          <ion-label>{{freeSched.length}} slots available</ion-label>\n        <ion-select [(ngModel)]="time" (ionChange)="setAppDate(time)">\n          <ion-option value="tod">today</ion-option>\n          <ion-option value="tom">tomorrow</ion-option>\n        </ion-select>\n    </ion-item>\n    <span class="topRev">All sessions are 1 hour long</span>\n    <div *ngIf="freeSched">\n      <ion-list radio-group>\n        <ion-item *ngFor="let av of freeSched">\n          <ion-label>{{av}}:00</ion-label>\n        <ion-radio (ionSelect)="setApTime(av)"></ion-radio>\n      </ion-item>\n      </ion-list>\n    </div>\n    <hr>\n    Reviews({{getReviewNumber(doctor.id)}})\n    <div *ngFor="let rev of docReviews">\n      <span class="topRev">by {{rev.user}} - {{rev.location}} {{rev.score}}<ion-icon name="star-outline"></ion-icon></span>\n      <p class="coreRev">{{rev.text}}</p>\n      <span class="botRev">{{rev.date}}</span>\n      <hr>\n    </div>\n    <ion-item>\n      <button class="submitBook" [disabled]="available === \'\'" (click)="finalizeBook()">Book an appointment</button>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\pages\doctor-profile\doctor-profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_reviews_service__["a" /* ReviewsServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_reviews_service__["a" /* ReviewsServiceProvider */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_appointment_service__["a" /* AppointmentServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_appointment_service__["a" /* AppointmentServiceProvider */]) === "function" ? _d : Object])
    ], DoctorProfilePage);
    return DoctorProfilePage;
}());

//# sourceMappingURL=doctor-profile.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_reviews_mock__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the ReviewsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReviewsServiceProvider = /** @class */ (function () {
    function ReviewsServiceProvider() {
        this.reviews = __WEBPACK_IMPORTED_MODULE_1__providers_reviews_mock__["a" /* reviews */];
        this.today = new Date();
    }
    ReviewsServiceProvider.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__providers_reviews_mock__["a" /* reviews */]);
    };
    ReviewsServiceProvider.prototype.getAll = function () {
        return this.reviews;
    };
    ReviewsServiceProvider.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__providers_reviews_mock__["a" /* reviews */][id]);
    };
    ReviewsServiceProvider.prototype.getById = function (id) {
        for (var i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].id === parseInt(id)) {
                return this.reviews[i];
            }
        }
        return null;
    };
    ReviewsServiceProvider.prototype.getDoctorReviews = function (doc) {
        var x = [];
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var rev = _a[_i];
            if (rev.doctor === doc) {
                x.push(rev);
            }
        }
        console.log(x);
        return x;
    };
    ReviewsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ReviewsServiceProvider);
    return ReviewsServiceProvider;
}());

//# sourceMappingURL=reviews-service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_doctor_profile_doctor_profile_module__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_payment_payment_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_appointment_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_doctors_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_reviews_service__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__pages_doctor_profile_doctor_profile_module__["a" /* DoctorProfilePageModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_payment_payment_module__["PaymentPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_appointment_service__["a" /* AppointmentServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_doctors_service__["a" /* DoctorsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_reviews_service__["a" /* ReviewsServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Salmeen\Desktop\TherappyAssignment\TherappyAssignment\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_profile__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DoctorProfilePageModule = /** @class */ (function () {
    function DoctorProfilePageModule() {
    }
    DoctorProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__doctor_profile__["a" /* DoctorProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__doctor_profile__["a" /* DoctorProfilePage */]),
            ],
        })
    ], DoctorProfilePageModule);
    return DoctorProfilePageModule;
}());

//# sourceMappingURL=doctor-profile.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_appointments_mock__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the AppointmentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppointmentServiceProvider = /** @class */ (function () {
    function AppointmentServiceProvider() {
        this.appointments = __WEBPACK_IMPORTED_MODULE_1__providers_appointments_mock__["a" /* appointments */];
        this.today = new Date();
    }
    AppointmentServiceProvider.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__providers_appointments_mock__["a" /* appointments */]);
    };
    AppointmentServiceProvider.prototype.getAll = function () {
        return this.appointments;
    };
    AppointmentServiceProvider.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__providers_appointments_mock__["a" /* appointments */][id]);
    };
    AppointmentServiceProvider.prototype.getById = function (id) {
        for (var i = 0; i < this.appointments.length; i++) {
            if (this.appointments[i].id === parseInt(id)) {
                return this.appointments[i];
            }
        }
        return null;
    };
    AppointmentServiceProvider.prototype.getByDoctorId = function (doctor) {
        for (var i = 0; i < this.appointments.length; i++) {
            if (this.appointments[i].doctor === parseInt(doctor)) {
                return this.appointments[i];
            }
        }
        return null;
    };
    AppointmentServiceProvider.prototype.findByDoctorId = function (doctor) {
        var ap = [];
        for (var i = 0; i < this.appointments.length; i++) {
            var x = new Date(this.appointments[i].date);
            var d = x.getDate();
            var m = x.getMonth();
            if ((this.appointments[i].doctor === doctor) && (this.today.getDate() <= d) && (this.today.getMonth() <= m)) {
                ap.push(this.appointments[i]);
            }
        }
        return Promise.resolve(ap);
    };
    AppointmentServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AppointmentServiceProvider);
    return AppointmentServiceProvider;
}());

//# sourceMappingURL=appointment-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return doctors; });
var doctors = [
    {
        "id": 0,
        "name": "Dr Who!",
        "specialties": [
            "Time",
            "mysteries"
        ],
        "language": "English",
        "rate": "100",
        "picture": "assets/imgs/docs/who.jpg",
        "description": "Very well known good character do I even make sense? this is obviously a tester",
        "experience": "25 years experience",
        "field": "Phd in Justice",
        "phoneNumber": "00000000",
        "chatContact": "DrWhO_chat",
        "workingHours": [9, 10, 11, 12, 13, 14, 15]
    },
    {
        "id": 1,
        "name": "Dr strange",
        "specialties": [
            "Time",
            "surgeries"
        ],
        "language": "English,French",
        "rate": "170",
        "picture": "assets/imgs/docs/strange.png",
        "description": "Very well known good  Avanger character do I even make sense? this is obviously a tester",
        "experience": "16 years experience",
        "field": "Phd in physics",
        "phoneNumber": "12345678",
        "chatContact": "Skeptic_at_first",
        "workingHours": [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    {
        "id": 2,
        "name": "Dr House",
        "specialties": [
            "Sarcasm",
            "mysteries"
        ],
        "language": "Arabic",
        "rate": "50",
        "picture": "assets/imgs/docs/house.png",
        "description": "Very well known sarcastic lazy character do I even make sense? this is obviously a tester",
        "experience": "24 years experience",
        "field": "Phd in Funny",
        "phoneNumber": "87654321",
        "chatContact": "callme_later",
        "workingHours": [9, 10, 11, 12, 13, 14, 15]
    },
    {
        "id": 3,
        "name": "Dr Henry Indiana Jones, Jr",
        "specialties": [
            "Firs",
            "Second"
        ],
        "language": "English",
        "rate": "150",
        "picture": "assets/imgs/docs/indiana.jpg",
        "description": "a very well known brave explorer and adventurer",
        "experience": "15 years experience",
        "field": "Phd in Adventure",
        "phoneNumber": "0456784590",
        "chatContact": "IndiJones_chat",
        "workingHours": [10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    {
        "id": 4,
        "name": "Dr Watson",
        "specialties": [
            "help",
            "annoying"
        ],
        "language": "English",
        "rate": "200",
        "picture": "assets/imgs/docs/watson.jpg",
        "description": "Very well known character helping Sherlock do I even make sense? this is obviously a tester",
        "experience": "45 years experience",
        "field": "Phd in Sideckick",
        "phoneNumber": "66666666",
        "chatContact": "Frankenchat",
        "workingHours": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }
];
//# sourceMappingURL=doctors-mock.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appointments; });
var appointments = [
    {
        "id": 0,
        "date": "11/01/2019",
        "starting": [10, 13, 12],
        "doctor": 0
    },
    {
        "id": 3,
        "date": "12/01/2019",
        "starting": [11, 9],
        "doctor": 1
    },
    {
        "id": 6,
        "date": "11/01/2019",
        "starting": [11],
        "doctor": 6
    }
];
//# sourceMappingURL=appointments-mock.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map