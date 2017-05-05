import { Component, OnInit } from '@angular/core';
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
    $('body').css('background-color', '#374661');
    $('nav.navbar-default').css("background-color", '#374661');
  }
}
