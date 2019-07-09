import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  fechaActual = new Date();
  primerDia = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), 1);
  ultimoDia = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1, 0);
  diasMes = this.ultimoDia.getDate();

  arregloMes: any [] = [];
  arregloDia: any [] = [];


  constructor() { }

  ngOnInit() {

    // console.log(this.ultimoDia.getDate());
    this.crearArregloMes();
    // console.log(this.ultimoDia.getDay());
    // console.log(this.primerDia.getDay());

  }

  crearArregloMes() {

    const dia = new Date();
    for ( let i = 0; i < this.diasMes; i++ ) {
      this.arregloMes[i] = i + 1 ;
      dia.setDate( i + 1 );
      // console.log(dia.getDay());
      this.arregloDia[i] = this.diaSemana(dia.getDay());
      // console.log(this.arregloDia[i]);
    }
  }

  diaSemana ( dia: number ) {
    // console.log(dia);
    switch (dia) {
      case 0: return('D') ;
      case 1: return('L') ;
      case 2: return('M') ;
      case 3: return('M') ;
      case 4: return('J') ;
      case 5: return('V') ;
      case 6: return('S') ;
    }
  }
}
