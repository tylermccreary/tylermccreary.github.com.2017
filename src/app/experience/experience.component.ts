import { Component, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', '../body/body.component.scss']
})
export class ExperienceComponent extends BodyComponent {
  title = 'Experience!';
  ngOnInit () {
    $('body').css('background-color', '#44c8f5');
    $('nav.navbar-default').css('background-color', '#44c8f5');
    var anchors = ['at&t', 'cerner', 'vert', 'anchor', 'projects'];
    var colors = ['#44c8f5', '#0C9BD5', '#00cc90', '#003366', '#23CCAE'];
    super.init(anchors, colors);
  }
}
