import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mas',
  templateUrl: 'formulario.html'
})
export class FormularioPage {

  lista:Array<any> = [
    {titulo: "Notificaciones", id:1, descripcion:"Notificar cuando esten disponibles nuevos cursos"},
    {titulo: "Actualizaciones", id:2, descripcion:"comprueba"},
    {titulo: "Modo Oscuro", id:3, descripcion:"tema oscuro"},
    {titulo: "Informes", id:4, descripcion:"Envia informes"},
    //{titulo: "Catalogos Prestashop", id:5, descripcion:"Tienda Online"},
    //{titulo: "Soporte Técnico para PC", id:6, descripcion:"Para reparar PC"},
    //{titulo: "Control Electrónico de Potencia", id:7, descripcion:"Borrar historial"}
  ];
  constructor(public navCtrl: NavController) {

  }

}
