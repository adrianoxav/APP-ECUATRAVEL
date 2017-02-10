import { MyApp }                      from './app.component';
import { MenuMock, NavMock, PlatformMock } from '../mocks';
import { LoginPage } from '../pages/login/login';
import { InteresesPage } from '../pages/intereses/intereses';
import { LugaresPage } from '../pages/lugares/lugares';

import { inject } from '@angular/core/testing';
import { Events, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Provider } from '@angular/core';
import {NavController,MenuController} from 'ionic-angular';
import {} from 'jasmine';
// Mock out Ionic's platform class
class MockClass {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}


let instance: MyApp = null;
let loginPage = null;
let app: MyApp;


describe('App', () => {

  // provide our implementations or mocks to the dependency injector
  let nav: NavController;
  let menu: MenuController;
   let platform;
beforeEach(inject([Platform], (_platform: Platform) => {
 platform = _platform;
 spyOn(_platform, 'ready').and.callThrough();

 spyOn(StatusBar, 'styleDefault');
 spyOn(Splashscreen, 'hide');

 app = new MyApp(platform,menu);
}));

  it('iniciar app', () => {
  expect(app.initializeApp).not.toBe(null);
});

it('iniciar root page', () => {
  expect(app.rootPage).not.toBe(null);
});

it('iniciar platform', () => {
  expect(platform.ready).toHaveBeenCalled();
});

it('definir pages', () => {
  expect(app.pages.length).toEqual(12);
});

it('abrir', () => {
  expect(app.menu).not.toBe(null);
});

it('intereses', () => {
  expect(app.openPage(InteresesPage)).not.toBe(null);
});
it('lugares', () => {
  expect(app.openPage(LugaresPage)).not.toBe(null);
});
let interes : InteresesPage
it('show interes', () => {
  expect(interes.showInterests.length).not.toBe(null);
});
let lugares : LugaresPage
it('puntuar lugares', () => {
  expect(lugares.goCrear).not.toBe(null);
});
it('puntuar lugares', () => {
  expect(lugares.takePicture).not.toBe(null);
});
});
