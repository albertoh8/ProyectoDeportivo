import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/data/partidosData';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-partidos-list',
  templateUrl: './partidos-list.component.html',
  styleUrls: ['./partidos-list.component.css']
})
export class PartidosListComponent implements OnInit {

  listPartidos: Partido[] = [];
  constructor(private partidos: PartidosService) { }

  ngOnInit(): void {
    this.listPartidos = this.partidos.getPartidos();
  }
}
