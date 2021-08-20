import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerieIndividualPageRoutingModule } from './serie-individual-routing.module';

import { SerieIndividualPage } from './serie-individual.page';
import {ComponentsModule} from "../../components/components.module";
import {IonicRatingModule} from "ionic-rating";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SerieIndividualPageRoutingModule,
        ComponentsModule,
        IonicRatingModule
    ],
  declarations: [SerieIndividualPage]
})
export class SerieIndividualPageModule {}
