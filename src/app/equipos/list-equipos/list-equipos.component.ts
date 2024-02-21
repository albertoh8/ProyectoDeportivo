import { Component } from '@angular/core';
import { Equipo } from 'src/app/data/equiposData';
import { EquiposService } from 'src/app/servicios/equipos.service';

@Component({
  selector: 'app-list-equipos',
  templateUrl: './list-equipos.component.html',
  styleUrls: ['./list-equipos.component.css']
})
export class ListEquiposComponent {
  equipos_list: Equipo[] = []

  constructor(private equiposServ: EquiposService) {

  }

  ngOnInit(): void {
    this.equipos_list = this.equiposServ.getEquipos()
  }
}
