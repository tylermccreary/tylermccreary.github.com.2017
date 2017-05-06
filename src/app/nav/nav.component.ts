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

  collapse = () => {
    this.isCollapsed = true;
  }
}
