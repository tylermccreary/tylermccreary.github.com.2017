import { Component, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent extends BodyComponent {
  title = 'Experience!';
  ngOnInit () {
    $('body').css('background-color', '#0574ac');
    $('nav.navbar-default').css('background-color', '#0574ac');
    var anchors = ['at&t', 'cerner', 'vert', 'projects'];
    var colors = ['#0574ac', '#0C9BD5', '#00996C', '#003366'];
    super.init(anchors, colors);
  }
}
