import { Injectable } from '@angular/core';
import { Equipo, equipos_data } from '../data/equiposData';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  getEquipos(): Equipo[] {
    return equipos_data;
  }
}
