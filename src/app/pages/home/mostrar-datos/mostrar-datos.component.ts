import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
  }

  llamame() {
    this.muestroModal = !this.muestroModal;
  }

  mostrarDatosPVC() {
    this.muestroModal = !this.muestroModal;
    this.displayDatos = true;
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
