import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string; // declaro la variable, importo el INPUT para el traspasdo de informacion.

  constructor() { }

  ngOnInit() {}

}
