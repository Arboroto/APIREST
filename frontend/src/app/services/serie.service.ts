import { Injectable } from '@angular/core';
import {Serie} from "../models/serie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  selectedSerie: Serie;
  series: Serie[] = [];
  readonly URL_API = 'http://localhost:3000/api/series';
  constructor(private http: HttpClient) {
    this.selectedSerie = new Serie();
  }

  getSeries(){
    return this.http.get(this.URL_API);
  }

  postSerie(serie: Serie){
    return this.http.post(this.URL_API+`/${serie._id}`, serie);
  }

  deleteSerie(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  putSerie(selectedSerie: Serie) {
    return this.http.put(this.URL_API + `/${selectedSerie._id}`, selectedSerie);
  }

}
