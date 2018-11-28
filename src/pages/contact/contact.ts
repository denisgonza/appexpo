import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElementoPage } from '../elemento/elemento';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {}
    agregarPagina() {
      this.navCtrl.push(ElementoPage);
    }
  

}
