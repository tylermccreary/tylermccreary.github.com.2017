import { Component, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { Color } from '../color';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent extends BodyComponent {
  title = 'Experience!';
  ngOnInit () {
    $('body').css('background-color', Color.attBackground);
    $('nav.navbar-default').css('background-color', Color.attBackground);
    var anchors = ['at&t', 'cerner', 'vert', 'projects'];
    var colors = [Color.attBackground, Color.cernerBackground,
      Color.vertBackground, Color.projectsBackground];
    super.init(anchors, colors);
  }
}
