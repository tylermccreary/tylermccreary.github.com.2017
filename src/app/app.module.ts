import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MnFullpageModule } from 'ngx-fullpage';
import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent }   from './home/home.component';
import { AboutComponent }      from './about/about.component';
import { ContactComponent }  from './contact/contact.component';
import { ExperienceComponent }  from './experience/experience.component';
import { NavComponent } from './nav/nav.component';
import { MapPageComponent } from './map/mappage.component';

import { Script } from './map/script.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    NavComponent,
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    MnFullpageModule.forRoot()
  ],
  providers: [Script],
  bootstrap: [AppComponent]
})
export class AppModule { }
