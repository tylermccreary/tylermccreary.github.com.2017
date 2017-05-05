import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  name = 'Contact';

  ngOnInit () {
    $('#fp-nav').remove();
    $('body').css('background-color', '#005E3E');
    $('nav.navbar-default').css("background-color", '#005E3E');
  }
}
