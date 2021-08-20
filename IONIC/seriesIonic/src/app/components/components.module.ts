import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";
import {MenuComponent} from "./menu/menu.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [HeaderComponent, MenuComponent], // debemos declarar los componentes para exportarlos.
  exports: [HeaderComponent, MenuComponent], // exportamos cada componente q necesitemos utilizar
  imports: [
    CommonModule,
    IonicModule,
      FormsModule,
      RouterModule
  ]
})
export class ComponentsModule { }
