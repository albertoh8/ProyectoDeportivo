import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
      fecha: ['', [Validators.required]],

    });
  }


  onSubmit() {
    if (this.partidoForm.valid) {
      alert(this.partidoForm.value)
    } else {
      alert('Formulario Invalido')
    }
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
      goles: [],
      tarjetas: []
    }
    this.partidosService.addPartido(this.partido)
  }

  navToList() {
    this.router.navigate(['partidos'])
  }

}
