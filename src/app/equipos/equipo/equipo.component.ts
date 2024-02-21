import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Equipo } from 'src/app/data/equiposData';
import { Partido } from 'src/app/data/partidosData';
import { EquiposService } from 'src/app/servicios/equipos.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  id: string = ''
  equipoDet: Equipo | undefined
  partidos: Partido[] = [];

  constructor(private service: EquiposService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get("id")!;
      this.equipoDet = this.service.getEquiposById(this.id);
      this.partidos = this.equipoDet?.partidos.filter(equipo => equipo.idLocal === this.equipoDet?.id || equipo.idVisitante === this.equipoDet?.id) || [];

    })
  }

}
