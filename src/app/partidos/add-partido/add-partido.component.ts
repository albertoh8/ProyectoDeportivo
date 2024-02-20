import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';
import { Gol, Partido, Tarjeta } from 'src/app/data/partidosData';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-add-partido',
  templateUrl: './add-partido.component.html',
  styleUrls: ['./add-partido.component.css']
})
export class AddPartidoComponent implements OnInit {
  partidoForm!: FormGroup;
  submitted = false;
  partidos: Partido[] = [];
  partido: Partido | undefined
  idLocal: string = '';
  idVisitante: string = '';
  fecha = '';

  goles: Gol[] = []
  gol: Gol | undefined

  tarjetas: Tarjeta[] = []
  tarjeta: Tarjeta | undefined


  constructor(
    private partidosService: PartidosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.partidoForm = this.formBuilder.group({
      idLocal: ['', Validators.required],
      idVisitante: ['', Validators.required],
      fecha: ['', [Validators.required, Validators.pattern('/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$/')]],
      goles: [],
      tarjetas: [],
    });
  }

  get f() {
    return this.partidoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.partidoForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.partidoForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.partidoForm.reset();
  }

  guardarPartido(idLocal: string, idVisitante: string, fecha: string) {
    this.partido = {
      idLocal: idLocal,
      idVisitante: idVisitante,
      fecha: fecha,
      goles: this.goles,
      tarjetas: this.tarjetas
    }
    this.partidosService.addPartido(this.partido)
  }

  navToList() {
    this.router.navigate(['partidos'])
  }
  agregarGol(idPArticipante: string, minuto: string) {
    this.gol = {
      idParticipante: idPArticipante,
      minuto: minuto
    }
    this.goles.push(this.gol)
    alert('Gol de: ' + this.gol.idParticipante + ' en el minuto: ' + this.gol.minuto);
  }
  aniadirTarjeta(idParticipanteTarj: string, minutoTarj: string, tipo: string) {
    this.tarjeta = {
      idParticipante: idParticipanteTarj,
      minuto: minutoTarj,
      tipoTarjeta: tipo
    }
    this.tarjetas.push(this.tarjeta)
  }

}
