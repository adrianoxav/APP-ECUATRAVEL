import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { LugaresPage } from '../pages/lugares/lugares';
import { InteresesPage } from '../pages/intereses/intereses';
import { CronogramaPage } from '../pages/cronograma/cronograma';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { Locations } from '../providers/locations';
import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    LugaresPage,
    InteresesPage,
    CronogramaPage,
    MapPage,
    ListPage,
    MainPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    LugaresPage,
    InteresesPage,
    CronogramaPage,
    MapPage,
    ListPage,
    MainPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Locations, GoogleMaps, Connectivity]
})
export class AppModule {}
