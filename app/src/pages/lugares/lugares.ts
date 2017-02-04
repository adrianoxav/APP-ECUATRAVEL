import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Locations } from '../../providers/locations';
import { GoogleMaps } from '../../providers/google-maps';
import {Camera} from 'ionic-native';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Lugares page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html'
})
export class LugaresPage {

  template: string = 'null';
  public base64Image: string

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public locations: Locations) {console.log('constructor');}

  goCrear() {
    this.template = 'crear';
  }

  cancelar() {
    this.template = 'null';
  }
  takePicture(){
      Camera.getPicture({
          destinationType: Camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000
      }).then((imageData) => {
          // imageData is a base64 encoded string
          this.base64Image = "data:image/jpeg;base64," + imageData;
      }, (err) => {
          console.log(err);
      });
  }

  showPrompt() {
     let prompt = this.alertCtrl.create({
       title: 'Danos tu experiencia',
       message: "Ingresa Tu comentario",
       inputs: [
         {
           name: 'title',
           placeholder: 'Title'
         },
       ],
       buttons: [
         {
           text: 'Cancel',
           handler: data => {
             console.log('Cancel clicked');
           }
         },
         {
           text: 'Save',
           handler: data => {
             console.log('Saved clicked');
           }
         },
         {
          text: 'Foto',
          handler: data => {
            this.takePicture()
          }

         }
       ]
     });
     prompt.present();
   }

  ionViewDidLoad() {
      console.log('Hello LUGARES Page');
  }
}
