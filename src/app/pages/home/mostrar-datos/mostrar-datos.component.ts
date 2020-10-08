import { Component, Input, OnInit } from '@angular/core';
import { DatosPersonas } from 'src/app/model/datosPersona';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent implements OnInit {

  @Input() datosPersonaOtroComponente: any;
  mellamo: boolean = false;
  displayDatos: boolean;


  constructor() { }

  ngOnInit(): void {


  }

  llamame() {
    this.mellamo = !this.mellamo;
    console.log("llego", this.datosPersonaOtroComponente.apellido);
  }

  mostrarDatosPVC() {
    console.log("click");
    this.mellamo = !this.mellamo;
    this.displayDatos = true;
  }


}
