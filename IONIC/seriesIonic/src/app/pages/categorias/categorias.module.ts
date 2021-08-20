import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasPageRoutingModule } from './categorias-routing.module';

import { CategoriasPage } from './categorias.page';
import {ComponentsModule} from "../../components/components.module";
import {IonicHeaderParallaxModule} from "ionic-header-parallax";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CategoriasPageRoutingModule,
        ComponentsModule,
        IonicHeaderParallaxModule
    ],
  declarations: [CategoriasPage]
})
export class CategoriasPageModule {}
