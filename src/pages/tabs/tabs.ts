import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario';
import { TecnicoPage } from '../tecnico/tecnico';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = TecnicoPage;
  tab4Root = ContactPage;
  tab5Root = FormularioPage;

  constructor() {

  }
}
