import { Component, HostListener } from '@angular/core';
import { CollapseDirective } from 'ngx-bootstrap';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isCollapsed = true;
  lastScroll = 0;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log("scrolling");
    console.log($(document).scrollTop());
    var thisScroll = $(document).scrollTop();
    if (thisScroll - this.lastScroll > 0) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
    this.lastScroll = thisScroll;
    // if ($(document).scrollTop() > 50) {
    //   $('nav').addClass('shrink');
    // } else {
    //   $('nav').removeClass('shrink');
    // }
  }
}
