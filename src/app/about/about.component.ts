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
    $('body').css('background-color', '#374661');
    $('nav.navbar-default').css("background-color", '#374661');
    var anchors = ['education', 'interests'];
    var colors = ['#374661', '#ced0cd', '#22b2c7'];
    super.init(anchors, colors);
  }
}
