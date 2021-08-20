import { Component, OnInit } from '@angular/core';
import {SerieService} from "../../services/serie.service";
import {Serie} from "../../models/serie";
import {NgForm} from "@angular/forms";



declare var M: any;

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  myImagen: string  = '';
  myCategorias: string  = '';
  selectedOption: string [] = [];
  options: string[] = [('accion'), ('aventura'), ('terror'), ('drama'),
    ('romance'),('comedia'),('documental'),('thriller'),('ciencia ficcion'),('animacion'),('fantasia'),('medievo')];
  private angular: any;

  constructor(public serieService: SerieService){

  }

  ngOnInit(): void {
    this.getSeries(); //para traerme la coleccion de series que tenga y actualizarla
    document.addEventListener('DOMContentLoaded', () =>{
      var elements = document.querySelectorAll('select')
      var instances = M.FormSelect.init(elements);
    });
  }

  addSerie(selectedSerie: Serie, serieForm: NgForm){
    if(selectedSerie._id){
      this.serieService.putSerie(selectedSerie)
        .subscribe(res =>{
          this.resetForm(serieForm);
          console.log('Orden de ejecución put ejecutada');
          this.getSeries()
        })
    }else {
      this.serieService.postSerie(selectedSerie)
        .subscribe(res => {
          console.log('res: ', res);
          this.getSeries();
        });
    }
  }

  addImagen(){
    if(this.serieService.selectedSerie.imagenes[0]===''){this.serieService.selectedSerie.imagenes.splice(0,1); }
    this.serieService.selectedSerie.imagenes.push(this.myImagen);
    this.myImagen = '';
  }

  addCategoria(){
    if(this.serieService.selectedSerie.categorias[0]===''){this.serieService.selectedSerie.categorias.splice(0,1); }
     this.selectedOption.forEach((value) => {
       this.serieService.selectedSerie.categorias.push(value);
     });
    console.log("addd categoria ejecutado");
    this.selectedOption = [];
  }

  resetForm(serieForm?: NgForm) {
    if(serieForm){
      serieForm.reset();
      this.serieService.selectedSerie = new Serie(); //limpiamos el objeto serie
    }
  }

  private getSeries() {
    this.serieService.getSeries()
      .subscribe(res => {
        this.serieService.series = res as Serie[];
        console.log("get serie realizado");
      })
  }

  editSerie(serie: Serie, serieForm?: NgForm){
    this.serieService.selectedSerie = serie;
    this.resetForm(serieForm)
  }

  deleteSerie(_id: string) {
  //deleteSERIE AQUI
    console.log("boton delete pulsado");
    if(confirm('¿Seguro que quieres eliminar esta serie?')){
      this.serieService.deleteSerie(_id)
        .subscribe(res =>
        {
          this.getSeries()
        });
    }
  }

  deleteCategoria() {
    if(this.serieService.selectedSerie.categorias.length>0){
      this.serieService.selectedSerie.categorias.splice(0,1);
    }
  }

  deleteImagen() {
    if(this.serieService.selectedSerie.imagenes.length>0){
      this.serieService.selectedSerie.imagenes.splice(0,1);
    }
  }
}
