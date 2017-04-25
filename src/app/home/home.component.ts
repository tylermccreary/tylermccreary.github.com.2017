import { Component, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BodyComponent {
  title = 'Home!';

  ngOnInit () {
    var anchors = ['firstPage', 'secondPage', 'thirdPage'];
    var colors = ['#ced0cd', '#374661', '#22b2c7'];
    super.init(anchors, colors);
  }
}
