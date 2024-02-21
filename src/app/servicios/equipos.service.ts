import { Injectable } from '@angular/core';
import { Equipo, equipos_data } from '../data/equiposData';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  equipos = equipos_data
  getEquipos(): Equipo[] {
    return this.equipos;
  }

  getEquiposById(id: string): Equipo | undefined {
    return this.equipos.find(equipo => equipo.id === id);
  }
}
