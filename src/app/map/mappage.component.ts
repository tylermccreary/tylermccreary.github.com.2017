import { Component, OnInit } from '@angular/core';
import { Color } from '../color';
declare var $: any;
declare var require: any;
import { Script } from './script.service';
declare var H: any;

@Component({
  selector: 'app-mappage',
  templateUrl: './mappage.component.html',
  styleUrls: ['./mappage.component.scss']
})
export class MapPageComponent {
  platform;
  script;

  constructor (script: Script){
    this.script = script;
  };

  ngOnInit () {
    var ctrl = this;
    // require.ensure(['http://js.api.here.com/v3/3.0/mapsjs-service.js'], require => {
    //     ctrl.H = require('http://js.api.here.com/v3/3.0/mapsjs-service.js');
    //     ctrl.initMap();
    //  });

    this.script.load('core', 'service').then(data => {
            console.log(H);
            this.initMap();
        }).catch(error => console.log(error));
    $('#fp-nav').remove();
    $('body').css('background-color', Color.homeBackground);
    $('nav.navbar-default').css("background-color", Color.homeBackground);
  }

  initMap = () => {
    console.log(H);
    // Obtain the default map types from the platform object:
    this.platform = new H.service.Platform({
      'app_id': 'CPks8WOrQyH798qpPuhx',
      'app_code': 'ZL74Dp_Ovt6xj6IHRuoAGQ'
    });
    var defaultLayers = this.platform.createDefaultLayers();

    // // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
      });
  }
}
