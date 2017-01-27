import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { LugaresPage } from '../lugares/lugares';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    tab1Root: any = MapPage;
    tab2Root: any = LugaresPage;

    constructor() {

    }

}
