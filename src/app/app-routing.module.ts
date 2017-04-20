import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { AboutComponent }      from './about/about.component';
import { CodingInterestsComponent } from './about/codingInterests/coding.component';
import { ContactComponent }  from './contact/contact.component';
import { ExperienceComponent }  from './experience/experience.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  { path: '',
    component: NavComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'experience', component: ExperienceComponent }
    ]}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
