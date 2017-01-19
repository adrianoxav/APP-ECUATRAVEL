import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from 'ionic-native';
import { GoogleMaps } from './google-maps';

import { Connectivity } from './connectivity';
declare var google;

@Injectable()
export class Locations {

    data: any;

    constructor(public http: Http) {

    }
    usersLocation;latitude;longitude;
    load(){

        if(this.data){
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
          Geolocation.getCurrentPosition().then((position) => {
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);




            this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+position.coords.latitude+','
            + position.coords.longitude+'&radius=5000&types=food&key=AIzaSyDTofmCEZHNotd6_Ncgqhl7ri0MN7zIZx8').map(res => res.json())
            .subscribe(data => {


                this.data = this.applyHaversine(data.locations);
                console.log(this.data)
                this.data.sort((locationA, locationB) => {
                    return locationA.distance - locationB.distance;
                });

                resolve(this.data);
            });

        });
            });

    }

    applyHaversine(locations){
      console.log(this.data)


  console.log(this.usersLocation)
        locations.map((location) => {

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
        console.log(locations);

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
