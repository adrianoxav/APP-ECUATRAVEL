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

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    LugaresPage,
    InteresesPage,
    CronogramaPage
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
    CronogramaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
