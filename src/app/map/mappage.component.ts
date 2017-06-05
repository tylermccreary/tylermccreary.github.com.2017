import { Component, OnInit, HostListener } from '@angular/core';
import { Color } from '../color';
declare var $: any;
declare var require: any;
import { Script } from './script.service';
declare var H: any;
import { ShowService } from '../data/shows.service';

@Component({
  selector: 'app-mappage',
  templateUrl: './mappage.component.html',
  styleUrls: ['./mappage.component.scss'],
  providers: [ ShowService ]
})
export class MapPageComponent {
  platform;
  script;
  defaultLayers;
  mapCreated = false;
  shows;
  map;

  constructor (script: Script, private showService: ShowService){
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
    this.getShows();
  }

  drawMap = () => {
    document.getElementById('mapContainer').innerHTML = "";
    // // Instantiate (and display) a map object:
    this.map = new H.Map(
      document.getElementById('mapContainer'),
      this.defaultLayers.normal.map,
      {
        zoom: 4,
        center: { lat: 41.9484, lng: -87.6553 }
      }
    );
    this.mapCreated = true;
    var ui = H.ui.UI.createDefault(this.map, this.defaultLayers);

    // Add map events functionality to the map
    var mapEvents = new H.mapevents.MapEvents(this.map);

    // Add behavior to the map: panning, zooming, dragging.
    var behavior = new H.mapevents.Behavior(mapEvents);
  }

  getShows = () => {
    this.showService.getShows().then(shows => {
      this.shows = shows;
      this.addMarkers();
    });
  }

  addMarkers = () => {
    // var animatedSvg =
    //   '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" ' +
    //   'y="0px" style="margin:-112px 0 0 -32px" width="136px"' +
    //   'height="150px" viewBox="0 0 136 150"><ellipse fill="#000" ' +
    //   'cx="32" cy="128" rx="36" ry="4"><animate attributeName="cx" ' +
    //   'from="32" to="32" begin="0s" dur="1.5s" values="96;32;96" ' +
    //   'keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes="0;0.4;1"' +
    //   'calcMode="spline" repeatCount="indefinite"/>' +
    //   '<animate attributeName="rx" from="36" to="36" begin="0s"' +
    //   'dur="1.5s" values="36;10;36" keySplines=".6 .0 .8 .0; .0 .8 .0 1"' +
    //   'keyTimes="0;0.4;1" calcMode="spline" repeatCount="indefinite"/>' +
    //   '<animate attributeName="opacity" from=".2" to=".2"  begin="0s" ' +
    //   ' dur="1.5s" values=".1;.7;.1" keySplines=" .6.0 .8 .0; .0 .8 .0 1" ' +
    //   'keyTimes=" 0;0.4;1" calcMode="spline" ' +
    //   'repeatCount="indefinite"/></ellipse><ellipse fill="#1b468d" ' +
    //   'cx="26" cy="20" rx="16" ry="12"><animate attributeName="cy" ' +
    //   'from="20" to="20" begin="0s" dur="1.5s" values="20;112;20" ' +
    //   'keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes=" 0;0.4;1" ' +
    //   'calcMode="spline" repeatCount="indefinite"/> ' +
    //   '<animate attributeName="ry" from="16" to="16" begin="0s" ' +
    //   'dur="1.5s" values="16;12;16" keySplines=".6 .0 .8 .0; .0 .8 .0 1" ' +
    //   'keyTimes="0;0.4;1" calcMode="spline" ' +
    //   'repeatCount="indefinite"/></ellipse></svg>';
    for (var i = 0; i < this.shows.length; i++) {

      var svg =
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" ' +
        'y="0px" style="margin:-64px 0 0 -64px" width="128px"' +
        'height="128px" viewBox="0 0 136 150"><circle fill="#1ED760" ' +
        'cx="64" cy="64" r="10" stroke="#010B1E" stroke-width="1.5">' +
        '</circle></svg>';
      // Create an icon object, an object with geographic coordinates and a marker:
      var icon = new H.map.DomIcon(svg),
        marker = new H.map.DomMarker({lat: this.shows[i].location.latitude,
          lng: this.shows[i].location.longitude}, {icon: icon});
      this.map.addObject(marker);
    }
  }
}
