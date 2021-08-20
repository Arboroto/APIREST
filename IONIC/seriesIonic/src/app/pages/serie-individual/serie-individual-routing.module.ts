import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieIndividualPage } from './serie-individual.page';

const routes: Routes = [
  {
    path: '',
    component: SerieIndividualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerieIndividualPageRoutingModule {}
