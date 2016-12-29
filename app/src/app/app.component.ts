
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { LugaresPage } from '../pages/lugares/lugares';
import { InteresesPage } from '../pages/intereses/intereses';
import { CronogramaPage } from '../pages/cronograma/cronograma';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 @ViewChild(Nav) nav: Nav;

  // make UsersPage the root (or first) page
  rootPage: any = MenuPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,  public menu: MenuController) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Menu', component: MenuPage },
      { title: 'Lugares', component: LugaresPage },
      { title: 'Intereses', component: InteresesPage },
      { title: 'Cronograma', component: CronogramaPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
