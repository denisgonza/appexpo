import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lista:Array<any> = [
    {titulo: "Java Swing", id:1, descripcion:"Aprender Java"},
    {titulo: "Operador Impresora 3D", id:2, descripcion:"Conocimiento Básico"},
    {titulo: "Molderia Básica", id:3, descripcion:"Evitar Aprender a coser"},
    {titulo: "Lengua Coreana", id:4, descripcion:"Hablar Coreano"},
    {titulo: "Tienda Prestashop", id:5, descripcion:"Tienda Online"},
    {titulo: "Soporte para PC", id:6, descripcion:"Para reparar PC"},
    {titulo: "Control PLC", id:7, descripcion:"Borrar historial"}
  ];
  constructor(public navCtrl: NavController) {

  }

}
