import { Component, OnInit, HostListener } from '@angular/core';
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
  defaultLayers;
  mapCreated = false;

  constructor (script: Script){
    this.script = script;
  };

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (this.mapCreated) {
      this.drawMap();
    }
  }

  ngOnInit () {
    var ctrl = this;
    // require.ensure(['http://js.api.here.com/v3/3.0/mapsjs-service.js'], require => {
    //     ctrl.H = require('http://js.api.here.com/v3/3.0/mapsjs-service.js');
    //     ctrl.initMap();
    //  });

    this.script.load('core', 'service', 'ui', 'mapevents').then(data => {
            console.log(H);
            this.initMap();
        }).catch(error => console.log(error));
    $('#fp-nav').remove();
    $('body').css('background-color', Color.mapBackground);
    $('nav.navbar-default').css("background-color", Color.mapBackground);
  }

  initMap = () => {
    console.log(H);
    // Obtain the default map types from the platform object:
    this.platform = new H.service.Platform({
      'app_id': 'CPks8WOrQyH798qpPuhx',
      'app_code': 'ZL74Dp_Ovt6xj6IHRuoAGQ'
    });
    this.defaultLayers = this.platform.createDefaultLayers();

    this.drawMap();
  }

  drawMap = () => {
    document.getElementById('mapContainer').innerHTML = "";
    // // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById('mapContainer'),
      this.defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
      }
    );
    this.mapCreated = true;
    var ui = H.ui.UI.createDefault(map, this.defaultLayers);

    // Add map events functionality to the map
    var mapEvents = new H.mapevents.MapEvents(map);

    // Add behavior to the map: panning, zooming, dragging.
    var behavior = new H.mapevents.Behavior(mapEvents);
  }
}
