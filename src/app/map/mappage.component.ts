import { Component, OnInit, HostListener } from '@angular/core';
import { Color } from '../color';
declare var $: any;
declare var require: any;
import { Script } from './script.service';
declare var H: any;
import { ShowService } from '../data/shows.service';
import { ArtistService } from '../data/artists.service';

@Component({
  selector: 'app-mappage',
  templateUrl: './mappage.component.html',
  styleUrls: ['./mappage.component.scss'],
  providers: [ ShowService, ArtistService ]
})
export class MapPageComponent {
  platform;
  script;
  defaultLayers;
  mapCreated = false;
  shows;
  map;
  ui;
  artists;

  constructor (script: Script, private showService: ShowService, private artistService: ArtistService){
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
    this.getArtists();
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
    this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);

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

  getArtists = () => {
    this.artistService.getArtists().then(artists => {
      this.artists = artists;
    });
  }

  markerClick = (clonedElement, domIcon, domMarker) => {
    console.log(domMarker);
    var artistsDOM = '';
    for (var i = 0; i < domMarker.data.artistIDs.length; i++) {
      var currentArtist = this.artists[domMarker.data.artistIDs[i]];
      console.log(currentArtist);
      if (i == 0) {
        artistsDOM += '<span style="font-size: 12px">artists:</span><br> ' +
        '<a class="artist headliner" href="https://play.spotify.com/artist/' + currentArtist.spotifyArtistId + '" target="_blank">' +
          currentArtist.name + '</a>';
      } else {
        artistsDOM +=
        '<br><a class="artist" href="https://play.spotify.com/artist/' + currentArtist.spotifyArtistId + '" target="_blank">' +
          currentArtist.name + '</a>';
      }
    }
    var bubble =  new H.ui.InfoBubble(domMarker.getPosition(), {
      // read custom data
      content:  '<div class="info-bubble"><h5 style="font-weight: bold">' + domMarker.data.title + '</h5>' +
                artistsDOM + '</div>'
    });
    // show info bubble
    this.ui.addBubble(bubble);
  }

  addMarkers = () => {
    for (var i = 0; i < this.shows.length; i++) {
      var div = '<div class="circle">';
      var show = this.shows[i];
      var ctrl = this;
      // Create an icon object, an object with geographic coordinates and a marker:
      var icon = new H.map.DomIcon(div, {
        // the function is called every time marker enters the viewport
        onAttach: function(clonedElement, domIcon, domMarker) {
          clonedElement.addEventListener('click',
            function() {
              ctrl.markerClick(clonedElement, domIcon, domMarker);
            });
        },
        // the function is called every time marker leaves the viewport
        onDetach: function(clonedElement, domIcon, domMarker) {
          clonedElement.removeEventListener('click',
            function() {
              ctrl.markerClick(clonedElement, domIcon, domMarker);
            });
        }
      });
      var marker = new H.map.DomMarker({lat: this.shows[i].location.latitude,
        lng: this.shows[i].location.longitude}, {icon: icon});
      marker.data = this.shows[i];
      this.map.addObject(marker);
    }
  }
}
