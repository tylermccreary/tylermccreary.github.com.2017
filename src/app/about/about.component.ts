import { Component, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../body/body.component.scss']
})
export class AboutComponent extends BodyComponent {
  name = "Tyler McCreary";
  description = "Software Developer"

  ngOnInit () {
    $('body').css('background-color', '#187FA3');
    $('nav.navbar-default').css("background-color", '#187FA3');
    var anchors = ['education', 'interests'];
    var colors = ['#187FA3', '#B84846'];
    super.init(anchors, colors);
  }
}
