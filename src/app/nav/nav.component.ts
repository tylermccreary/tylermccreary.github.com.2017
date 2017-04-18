import { Component } from '@angular/core';
import { CollapseDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isCollapsed = true;
}
