import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ionicSerie} from "../models/ionicSerie";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  ionicSelectedSerie: ionicSerie;
  ionicSeries: ionicSerie[] = [];
  readonly URL_API = 'http://localhost:3000/api/series';

  constructor(private http: HttpClient) {this.ionicSelectedSerie = new ionicSerie();}
  getMenuOptions(){
    return this.http.get('assets/data/menu.json');
  }

  getSeries(){//GET DE TODAS LAS SERIES
    return this.http.get<ionicSerie[]>(this.URL_API);
  }

  getSeriesGenre(genre: string) {
    return this.http.get(this.URL_API + `/categorias/${genre}`);
  }

  getOneSerie(id: string){
    return this.http.get(this.URL_API + `/${id}`);
  }

  putSerie(selectedSerie: ionicSerie) {
    return this.http.put(this.URL_API + `/${selectedSerie._id}`, selectedSerie);
  }

  //GET DE SERIES EN FUNCION DE LA CATEGORÍA
    //PODEMOS RESOLVERLO A BASE DE ALGORITMIA -> Pasamos un valor por la URL a la pagina categoria -HECHO
  // , llamamos a TODAS -"HECHO"
    // las series y creamos una función donde solo se seleccionan las series que contienen ese valor.

  //POST O ACTUALIZACION AÑADIENDO UN CORREO Y UNA PUNTUACION EA TRAVÉS DE UN FRMULARIO
}
