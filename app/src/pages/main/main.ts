import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InteresesPage } from '../intereses/intereses';
import { CronogramaPage } from '../cronograma/cronograma';
import { MapPage } from '../map/map';
import { LugaresPage } from '../lugares/lugares';
/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  };


    openInteresesPage() {
      this.navCtrl.push(InteresesPage);
    }
    openCronogramaPage() {
      this.navCtrl.push(CronogramaPage);
    }

    openMapPage() {
      this.navCtrl.push(MapPage);
    }
    openLugaresPage() {
      this.navCtrl.push(LugaresPage);  
    }
}
