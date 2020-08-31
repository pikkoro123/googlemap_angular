import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'google-api-angular-spanish';

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  map: google.maps.Map;

  // lat = 40.730610;
  // lng = -73.935242;
  // lat = -34.681;
  // lng = -58.371;
  lat = 13.8028793;
  lng = 100.5368949;
  // 13.8028793,100.5368949 บางซื่อ mrt

  // central world
  // lat = 13.7466356;
  // lng = 100.5371464;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 13,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  calculateAndDisplayRoute(): void {
    this.directionsService.route({
      // origin: 'chicago, il',
      // destination: 'los angeles, ca',
      origin: 'MRT บางซื่อ ประตู 2 บริษัทปูนซีเมนต์ไทย',
      destination: 'Central World, Centara Grand and Bangkok Convention Centre, Rama I Road, Pathum Wan, Pathum Wan District, Bangkok',
      travelMode: google.maps.TravelMode.DRIVING
    }, (response, status) => {
      if (status === 'OK') {
        console.log(response);
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement,
    this.mapOptions);
  }

  ngAfterViewInit(): void {
    this.mapInitializer();
    // this.marker.setMap(this.map);
    this.calculateAndDisplayRoute();
    this.directionsDisplay.setMap(this.map);
  }

  /*position = {
    lat: -34.681,
    lng: -58.371
  };

  label = {
    color: 'red',
    text: 'Marcador'
  };

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  ngOnInit(): void {
    this.onChangeHandler();
  }

  onChangeHandler(): void {
    console.log('it is?');
    this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay): void {
    directionsService.route({
      origin: 'chicago, il',
      destination: 'los angeles, ca',
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        console.log(response);
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }*/



}
