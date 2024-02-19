import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../servicios/partidos.service';
import { Partido } from '../data/partidosData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
  listPartidos: Partido[] = [];
  constructor(private partidos: PartidosService, private router: Router) { }

  ngOnInit(): void {
    this.listPartidos = this.partidos.getPartidos();
  }

  navToPartido(partido: Partido) {

    this.router.navigate(['partidos', 'partido', partido.idLocal]);
  }
}
