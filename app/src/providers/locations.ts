import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from 'ionic-native';
import { GoogleMaps } from './google-maps';

import { Connectivity } from './connectivity';

declare var google;

@Injectable()
export class Locations {

  data: any;

  constructor(public http: Http) {
    console.log('Hello Locations Provider');
  }

  usersLocation;latitude;longitude;
  load(){
    console.log("jose2");
    if(this.data){
      return Promise.resolve(this.data);
    }


    return new Promise(resolve =>{

    /*
      Geolocation.getCurrentPosition().then((position) => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        console.log("jose1: "+position.coords.latitude);

        this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+position.coords.latitude+',' + position.coords.longitude+'&radius=5000&&key=AIzaSyCwKpmkB1nqwAihb33xeM-R24CxDdUtdi8').map(res => res.json()).subscribe(data => {
            this.data = this.applyHaversine(data.locations);

            this.data.sort((locationA, locationB) => {
                return locationA.distance - locationB.distance;
            });
            resolve(this.data);
        });
      });
      */

      Geolocation.getCurrentPosition().then((position) => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        this.http.get('assets/data/locations_json.json').map(res => res.json()).subscribe(data => {
          this.data = data.locations;
          this.data = this.applyHaversine(this.data);
          this.data.sort((locationA, locationB) => {
              return locationA.distance - locationB.distance;
          });
          resolve(this.data);
        });
      });

      console.log("applyHaversine 3");
    });
  }

  applyHaversine(locations){
    console.log("applyHaversine 1");


    locations.map((location) => {
    console.log("applyHaversine 2");

    let placeLocation = {
      lat: location.latitude,
      lng: location.longitude
    };

    location.distance = this.getDistanceBetweenPoints(
        this.usersLocation,
        placeLocation,
        'miles'
      ).toFixed(2);
    });

    return locations;
  }
  getDistanceBetweenPoints(start, end, units){

        let earthRadius = {
            miles: 3958.8,
            km: 6371
        };

        let R = earthRadius[units || 'miles'];
        let lat1 = start.lat;
        let lon1 = start.lng;
        let lat2 = end.lat;
        let lon2 = end.lng;

        let dLat = this.toRad((lat2 - lat1));
        let dLon = this.toRad((lon2 - lon1));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;

        return d;

    }

    toRad(x){
        return x * Math.PI / 180;
    }
}
