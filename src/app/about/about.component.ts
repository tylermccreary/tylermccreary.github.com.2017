import { Component, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { Color } from '../color';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent extends BodyComponent {
  name = "Tyler McCreary";
  description = "Software Developer"

  ngOnInit () {
    $('body').css('background-color', Color.educationBackground);
    $('nav.navbar-default').css("background-color", Color.educationBackground);
    var anchors = ['education', 'interests'];
    var colors = [Color.educationBackground, Color.interestsBackground];
    super.init(anchors, colors);
  }
}
