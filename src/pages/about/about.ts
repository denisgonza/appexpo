
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  contacto = {
    nombre:"",
    apellido:"",
    telefono:"",
    correo:""
  }
  constructor(public navCtrl: NavController,
  public alertController:AlertController) {

  }

  enviarForm(miformulario){
    console.log(this.contacto);
    console.log(miformulario.value);
  }

  showAlert() {
    let alerta = this.alertController.create ({
    title: "Información",
    subTitle: "Se enviaron los datos.",
    buttons:  ["ok"]
    });
    alerta.present();
  }
}
