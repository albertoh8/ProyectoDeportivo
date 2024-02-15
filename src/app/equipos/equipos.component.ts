import { Component, OnInit } from '@angular/core';
import { Equipo } from '../data/equiposData';
import { EquiposService } from '../servicios/equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipos_list: Equipo[] = []

  constructor(private equiposServ: EquiposService) {

  }

  ngOnInit(): void {
    this.equipos_list = this.equiposServ.getEquipos()
  }

}
