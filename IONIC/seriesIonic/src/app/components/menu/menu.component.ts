import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ComponenteMenu} from "../../Interfaces/interfaces";
import {DataService} from "../../InnerService/data.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  CategotiasGenericas: Observable<ComponenteMenu[]>; // Observable: no muestra la información hasta que noe stá cargada
  constructor(private innerDataService: DataService) { }

  ngOnInit() {
    // @ts-ignore
    this.CategotiasGenericas =  this.innerDataService.getMenuOptions();
  }

}
