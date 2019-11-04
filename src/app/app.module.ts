import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DoctorProfilePageModule } from '../pages/doctor-profile/doctor-profile.module';
import { PaymentPageModule } from '../pages/payment/payment.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppointmentServiceProvider } from '../providers/appointment-service';
import { DoctorsServiceProvider } from '../providers/doctors-service';
import { ReviewsServiceProvider } from '../providers/reviews-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DoctorProfilePageModule,
    PaymentPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppointmentServiceProvider,
    DoctorsServiceProvider,
    ReviewsServiceProvider
  ]
})
export class AppModule {}
