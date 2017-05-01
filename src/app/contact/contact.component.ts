import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = 'Contact';

  ngOnInit () {
    $('#fp-nav').remove();
    $('body').css('background-color', '#00915F');
    $('nav.navbar-default').css("background-color", '#00915F');
  }
}
