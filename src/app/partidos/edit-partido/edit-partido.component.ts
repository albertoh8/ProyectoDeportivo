import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Partido } from 'src/app/data/partidosData';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-edit-partido',
  templateUrl: './edit-partido.component.html',
  styleUrls: ['./edit-partido.component.css']
})
export class EditPartidoComponent {

  id: string = ''
  partidoDet: Partido | undefined

  constructor(private activatedRoute: ActivatedRoute, private partidosService: PartidosService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get("idLocal")!;

      this.partidoDet = this.partidosService.getPartidoByIdLocal(this.id);
    })
  }

}
