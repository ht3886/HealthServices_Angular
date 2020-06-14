import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MedicineDeliveryComponent } from './medicine-delivery/medicine-delivery.component';
import { HomeCareComponent } from './home-care/home-care.component';
import { ScheduleAssessmentComponent } from './home-care/schedule-assessment/schedule-assessment.component';
import { RouterModule } from '@angular/router';
import { HomeSupportComponent } from './home-care/home-support/home-support.component';
import { HeaderComponent } from './header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingPageComponent,
    MedicineDeliveryComponent,
    HomeCareComponent,
    ScheduleAssessmentComponent,
    HomeSupportComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
