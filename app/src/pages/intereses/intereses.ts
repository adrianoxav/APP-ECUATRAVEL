import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Intereses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-intereses',
  templateUrl: 'intereses.html'
})
export class InteresesPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    console.log('constructor interees');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InteresesPage');
  }

  my_function(selectedValue){
    console.log("Selected:",selectedValue);
  }

  showInterests(){
    let prompt = this.alertCtrl.create({
      title: 'GUARDAR INTERESES',
      message: "Al guardar los intereses, se comenzará a filtrar los lugares cercanos según los intereses del usuario.",
      inputs: [
        {
          name: 'title',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar Intereses',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
