import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ScheduleAssessmentComponent } from './home-care/schedule-assessment/schedule-assessment.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { MedicineDeliveryComponent } from './medicine-delivery/medicine-delivery.component';
import { HomeCareComponent } from './home-care/home-care.component';
import { HomeSupportComponent } from './home-care/home-support/home-support.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'orderMedicine', component: MedicineDeliveryComponent },
  { path: 'homeCare', component: HomeCareComponent, children: [
    { path: '', component: HomeSupportComponent },
    { path: 'bookHomeCare', component: ScheduleAssessmentComponent }
  ] },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: '**', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }