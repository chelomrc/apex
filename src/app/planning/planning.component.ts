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
  constructor() { }

  ngOnInit() {

    console.log(this.ultimoDia.getDate());

  }

}
