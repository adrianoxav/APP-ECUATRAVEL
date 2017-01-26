import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
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
    tab2Root: any = ListPage;
    public base64Image: string;

    constructor(public alertCtrl: AlertController){

    }
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


  }
