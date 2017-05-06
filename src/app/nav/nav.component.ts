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
  navHover = false;

  collapse = () => {
    this.isCollapsed = true;
  }

  ngOnInit () {
    var ctrl = this;
    $('nav').mouseover(function() {
      ctrl.navHover = true;
    });
    $('nav').mouseleave(function() {
      ctrl.navHover = false;
    });
    $('body').click(function() {
      if (!ctrl.navHover) {
        ctrl.collapse();
      }
    });
  }
}
