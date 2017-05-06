import { Component, OnInit, trigger, transition, style, animate, state, keyframes } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { Color } from '../color';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './experience.component.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(1000, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
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
