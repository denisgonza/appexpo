import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tecnico',
  templateUrl: 'tecnico.html'
})
export class TecnicoPage {

  seleccion:string = "grupo1";
  constructor(public navCtrl: NavController) {

  }

}
