import { Component, OnInit } from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";
import {ionicSerie} from "../../models/ionicSerie";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../InnerService/data.service";
import {IonicRatingModule} from "ionic-rating";

@Component({
  selector: 'app-serie-individual',
  templateUrl: './serie-individual.page.html',
  styleUrls: ['./serie-individual.page.scss'],
})
export class SerieIndividualPage implements OnInit {

  value_id: string;
  serie: ionicSerie;
  correo: string;
  rating: number = 0;
  divisor: number = 0; //hago el divisor para calcular la puntuacion media, ya que no puedo hacer el .length por algun motivo
  porcentaje: number = 0;
  puntuacion: number = 0;

  constructor(private toastController: ToastController, private route: ActivatedRoute, private innerDataService: DataService) { }

  ngOnInit() {
    this.value_id = this.route.snapshot.paramMap.get('value');
    console.log(this.value_id);
    this.innerDataService.getOneSerie(this.value_id).subscribe(res=>{
      this.serie = res as ionicSerie;
      console.log("Serie: " + this.serie.titulo);
    });
    this.function();
    this.calcularPuntuacionMedia();
  }

  enviarFormulario() {
    let nuevaPuntuacion: any = [this.puntuacion, this.correo];
    this.serie.puntuaciones = this.serie.puntuaciones + nuevaPuntuacion;
    this.innerDataService.putSerie(this.serie);
    this.toastInformativo('¡Oye!', 'La puntuación ha sido registrada con éxito', 'dark');
    this.calcularPuntuacionMedia();
  }

  calcularPuntuacionMedia(){
    if(this.serie){
    for(const p in this.serie.puntuaciones){
     this.rating = this.rating + this.serie.puntuaciones.puntuacion[p];
     this.divisor++;
      }
    }
    console.log("El numero de puntuaciones totales es: " + this.divisor + " y la puntuación media es: " + this.puntuacion/this.divisor);
  }

  async  toastInformativo(header: string, message:string, color: string) {
    const toastElement = await this.toastController.create({
      header,
      message,
      color,
      animated: true,
      position: 'middle',
      duration: 2000
    });
    await toastElement.present();
  }

  cambiarRango(event: CustomEvent) {
    this.porcentaje = event.detail.value;
  }

  function(){
    let variable: number = 0;
    if(this.serie){
      for(const p in this.serie.puntuaciones){
        variable++;
      }
      console.log("Puntuaciones registradas actuales")
    }
  }
}
