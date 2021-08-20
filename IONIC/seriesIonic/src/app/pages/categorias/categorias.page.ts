import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../InnerService/data.service";
import {ComponenteMenu} from "../../Interfaces/interfaces";
import {ionicSerie} from "../../models/ionicSerie";
import {Observable} from "rxjs";
import {IonInfiniteScroll, NavController} from "@ionic/angular";



@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) ionInfiniteScroll: IonInfiniteScroll;
  value: string;
  componentes: ComponenteMenu[];
  seriesIoinc: ionicSerie[] = [];
  seriesCarga: ionicSerie[] = [];
  slice: number = 4;

  constructor(private route: ActivatedRoute, private innerDataService: DataService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.value = this.route.snapshot.paramMap.get('value');
    this.innerDataService.getSeriesGenre(this.value).subscribe((res)=>{
      this.seriesIoinc = res as ionicSerie[];
      this.pasarDatos();
    });

    this.innerDataService.getMenuOptions().subscribe((res)=>{
      this.componentes = res as ComponenteMenu[]; //CAST DE OBSERVABLE A NO OBSERVABLE
    });
  }

  pasarDatos(){
    console.log("cargamos con el slice de el array q contiene" + this.seriesIoinc.length);
    this.seriesCarga = this.seriesIoinc.slice(0, 4);
    console.log("cargados: " + this.seriesCarga.length);
    console.log(this.seriesCarga.length);
  }

  cargarSeries(event){
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

    cargaSerie(serie: ionicSerie) {
      this.navCtrl.navigateForward(`/serie-individual/${ serie._id }`);
    }
}

