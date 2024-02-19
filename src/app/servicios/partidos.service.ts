import { Injectable } from '@angular/core';
import { Partido, partidos_data } from '../data/partidosData';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  partidos = partidos_data
  constructor() { }

  getPartidos(): Partido[] {
    return this.partidos;
  }

  getPartidoByIdLocal(idLocal: string): Partido | undefined {
    return this.partidos.find(partido => partido.idLocal === idLocal);
  }
}
