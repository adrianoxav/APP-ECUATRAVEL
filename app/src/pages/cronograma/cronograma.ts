import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Calendar} from 'ionic-native';
import {ToastController} from 'ionic-angular';

/*
  Generated class for the Cronograma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cronograma',
  templateUrl: 'cronograma.html'
})
export class CronogramaPage {




public title: string;
public note: string;
public startDate: Date;
public endDate: Date;
public titleUpdated: string;
public noteUpdated: string;
private nav: NavController;

constructor( nav: NavController, public navParams: NavParams,private toastCtrl: ToastController) {

  this.nav = nav;

  this.title = 'Ingresa tu viaje';
  this.note = 'Que deseas visitar?';
  this.startDate = new Date();
  this.startDate.setMinutes(this.startDate.getMinutes() + 10);
  this.endDate = new Date();
  this.endDate.setHours(this.startDate.getHours() + 1);

  this.titleUpdated = 'Viaje Actualizado';
  this.noteUpdated = 'Has actualizado tu viaje !';
}



public createEvent():void{

  let options:any = {
    firstReminderMinutes:5
  };

  Calendar.createEventWithOptions(this.title, null, this.note, this.startDate, this.endDate, options).then(() => {
    this.nav.push(this.toastCtrl.create({
      message:'Created',
      duration:3000
    }));
  });
}

public deleteEvent():void{
  Calendar.deleteEvent(this.title, null, this.note, this.startDate, this.endDate).then(data => {
    this.nav.push(this.toastCtrl.create({
      message:data===true ? 'Deleted' : 'Not deleted',
      duration:3000
    }));
  });
}

public openCalendar():void{
  Calendar.openCalendar(this.startDate);
}
}
