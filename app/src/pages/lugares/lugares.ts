import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

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


    tab2Root: any = ListPage;

    constructor(){

    }
  }
