import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MnFullpageModule } from 'ngx-fullpage';

import { AppComponent } from './app.component';
import { HomeComponent }   from './home/home.component';
import { AboutComponent }      from './about/about.component';
import { ContactComponent }  from './contact/contact.component';
import { ExperienceComponent }  from './experience/experience.component';
import { NavComponent } from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap';
import { BioComponent } from './about/bio/bio.component';
import { CodingInterestsComponent } from './about/codingInterests/coding.component';
import { HobbiesComponent } from './about/hobbies/hobbies.component';
// import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    NavComponent,
    BioComponent,
    CodingInterestsComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
