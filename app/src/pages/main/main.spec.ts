import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { MainPage } from './Main';
import {} from 'jasmine';
import { LugaresPage } from '../lugares/lugares';


let comp: MainPage;
let fixture: ComponentFixture<MainPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Main Page', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp, MainPage],

            providers: [

            ],

            imports: [
                IonicModule.forRoot(MyApp)
            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(MainPage);
        comp    = fixture.componentInstance;

    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });

    it('is created', () => {

        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();

    });

    it('initialises with a title of My Page', () => {
        expect(comp['title']).toEqual('My Page');
    });

    it('can set the title to a supplied value', () => {

        de = fixture.debugElement.query(By.css('ion-title'));
        el = de.nativeElement;

        comp.openLugaresPage('LugaresPage');
        fixture.detectChanges();
        expect(comp['title']).toEqual('Your Page');
        expect(el.textContent).toContain('Your Page');

    });

});
