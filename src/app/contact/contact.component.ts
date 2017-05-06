import { Component, OnInit } from '@angular/core';
import { Color } from '../color';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  name = 'Contact';

  ngOnInit () {
    $('#fp-nav').remove();
    $('body').css('background-color', Color.contactBackground);
    $('nav.navbar-default').css("background-color", Color.contactBackground);
  }
}
