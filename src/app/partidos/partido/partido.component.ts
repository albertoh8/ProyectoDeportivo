import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Gol, Partido } from 'src/app/data/partidosData';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  id: string = ''
  partidoDet: Partido | undefined
  golesLocal: Gol[] = [];
  golesVisitante: Gol[] = [];


  constructor(private activatedRoute: ActivatedRoute, private partidosService: PartidosService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get("idLocal")!;

      this.partidoDet = this.partidosService.getPartidoByIdLocal(this.id);
      this.golesLocal = this.partidoDet?.goles.filter(gol => gol.idParticipante === this.partidoDet?.idLocal) || [];
      this.golesVisitante = this.partidoDet?.goles.filter(gol => gol.idParticipante === this.partidoDet?.idVisitante) || [];
    })
  }

  navToList() {
    this.router.navigate(['partidos'])
  }

  navToEdit(idLocal: string | undefined) {
    this.router.navigate(['./partido/edit', idLocal])
  }


}
