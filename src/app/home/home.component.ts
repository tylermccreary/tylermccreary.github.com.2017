import { Component, OnInit } from '@angular/core';
import { Color } from '../color';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  name = "Tyler McCreary";
  description = "Software Developer"

  ngOnInit () {
    $('#fp-nav').remove();
    $('body').css('background-color', Color.homeBackground);
    $('nav.navbar-default').css("background-color", Color.homeBackground);
  }
}
