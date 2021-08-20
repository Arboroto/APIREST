import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeriesComponent} from "./components/series/series.component";

const routes: Routes = [
  {//-con esto cargamos la pagina principal
  path: '',
  component: SeriesComponent,
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
