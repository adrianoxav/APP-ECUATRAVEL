import { MyApp }                      from './app.component';
import { MenuMock, NavMock, PlatformMock } from '../mocks';
import { LoginPage } from '../pages/login/login';
import { inject } from '@angular/core/testing';
import { Events, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Provider } from '@angular/core';
import {NavController,MenuController} from 'ionic-angular';
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

it('abrir menu', () => {
  expect(app.menu).not.toBe(null);
});
});
