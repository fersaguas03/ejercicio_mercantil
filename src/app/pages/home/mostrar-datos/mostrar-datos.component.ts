import { Component, Input, OnInit } from '@angular/core';
import { Cobertura } from 'src/app/model/cobertura';
import { DatosPersonas } from 'src/app/model/datosPersona';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent implements OnInit {

  @Input() datosPersonaOtroComponente: any;
  @Input() datosVehiculoOtroComponente: any;
  @Input() coberturaSelect: any;
  muestroModal: boolean = false;
  displayDatos: boolean;
  displayModalGuardado: boolean;
  // botondes: string = "false"

  constructor() { 
  }

  ngOnInit(): void {

  }

  llamame() {
    this.muestroModal = !this.muestroModal;
    console.log("llego", this.datosPersonaOtroComponente.apellido);
    console.log("llego vehiculo del padre", this.datosVehiculoOtroComponente);
    console.log("llego la cobertura llamame", this.coberturaSelect);
    
    
  }

  mostrarDatosPVC() {
    console.log("click");
    this.muestroModal = !this.muestroModal;
    this.displayDatos = true;
    console.log("llego la cobertura mostrar PVC", this.coberturaSelect.titulo);
  }

  guardarDatos(){
    this.displayDatos=false
    this.showModalDialog();
  }


  showModalDialog(){
    this.displayModalGuardado = true;
  }

  refresh(): void {
    this.displayModalGuardado=false
    window.location.reload();
}

}
