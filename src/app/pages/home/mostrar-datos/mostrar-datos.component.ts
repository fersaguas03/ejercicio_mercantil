import { Component, Input, OnInit } from '@angular/core';
import { Cobertura } from 'src/app/model/cobertura';
import { DatosPersonas } from 'src/app/model/datosPersona';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.scss']
})
export class MostrarDatosComponent implements OnInit {

  @Input() datosPersonaOtroComponente: any;
  @Input() datosVehiculoOtroComponente: any;
  @Input() coberturaSelect: any;
  mellamo: boolean = false;
  displayDatos: boolean;


  constructor() { }

  ngOnInit(): void {



  }

  llamame() {
    this.mellamo = !this.mellamo;
    console.log("llego", this.datosPersonaOtroComponente.apellido);
    console.log("llego vehiculo del padre", this.datosVehiculoOtroComponente);
    console.log("llego la cobertura llamame", this.coberturaSelect);
    
    
  }

  mostrarDatosPVC() {
    console.log("click");
    this.mellamo = !this.mellamo;
    this.displayDatos = true;
    console.log("llego la cobertura mostrar PVC", this.coberturaSelect.titulo);
  }


}
