import {Component, OnInit, ViewChild} from '@angular/core';
import {ComponenteMenu} from "../../Interfaces/interfaces";
import {Observable} from "rxjs";
import {DataService} from "../../InnerService/data.service";
import {ionicSerie} from "../../models/ionicSerie";
import {IonInfiniteScroll, NavController} from "@ionic/angular";
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) ionInfiniteScroll: IonInfiniteScroll;

  componentes: Observable<ComponenteMenu[]>;
  seriesIoinc: ionicSerie[] = [];
  seriesCarga: ionicSerie[] = [];
  slice: number = 4;

  constructor(private innerDataService: DataService, private navCtrl: NavController) { }

  ngOnInit() {
    this.innerDataService.getSeries().subscribe((res)=>{
      this.seriesIoinc = res as ionicSerie[];
      this.pasarDatos();
    });
  }


  pasarDatos(){
    //cargamos 4 series
    console.log("cargamos con el slice de el array q contiene" + this.seriesIoinc.length);
    this.seriesCarga = this.seriesIoinc.slice(0, 4);
    console.log("cargados: " + this.seriesCarga.length);
    // @ts-ignore
    this.componentes = this.innerDataService.getMenuOptions();
    console.log(this.seriesCarga.length);
  }


  abrirCategoria(categoriaSeleccionada: string){
    console.log(categoriaSeleccionada);
    this.navCtrl.navigateForward(`/categorias/${ categoriaSeleccionada }`);
  }

  cargarSeries(event) {
    if(this.seriesCarga.length>this.seriesIoinc.length){
      event.target.complete();
      this.ionInfiniteScroll.disabled=true;
    }
    setTimeout(()=>{
      this.seriesCarga.push(...this.seriesIoinc.slice(this.slice, this.slice+4));
      this.slice+=4;
      event.target.complete();
    }, 1000);
  }

  abrirSerie(serie: ionicSerie){
    this.navCtrl.navigateForward(`/serie-individual/${ serie._id }`);
  }

}
