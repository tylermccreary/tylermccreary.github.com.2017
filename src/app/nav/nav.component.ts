import { Component, OnInit } from '@angular/core';
import { CollapseDirective } from 'ngx-bootstrap';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isCollapsed = true;

  ngOnInit () {
    var navComponent = this;
    $('nav').mouseleave(function() {
      $('#navbar').addClass("hidden-nav");
    });

    $('nav').mouseover(function() {
      $('#navbar').removeClass("hidden-nav");
    });
  }

  collapse = () => {
    this.isCollapsed = true;
  }


}
