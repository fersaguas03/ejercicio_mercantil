import { Component, Input, OnInit, Version, ViewChild } from '@angular/core';
import { Provincia } from 'src/app/model/provincia';
import { Municipio } from 'src/app/model/municipio';
import { MercantilService } from 'src/app/services/mercantil.service';
import { Marca } from 'src/app/model/marca';
import { Modelo } from 'src/app/model/modelo';
import { ActivatedRoute } from '@angular/router';
import { DatosVehiculoComponent } from './datos-vehiculo/datos-vehiculo.component';
// import { Cobertura } from 'src/app/model/cobertura';
// import { Usuario } from 'src/app/model/usuario';
import { BehaviorSubject } from 'rxjs';
import { Cobertura } from 'src/app/model/cobertura';
import { DatosPersonas } from 'src/app/model/datosPersona';
import { DatosVehiculo } from 'src/app/model/datosVehiculo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MercantilService]
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  checked: boolean;
  provincias: Provincia[];
  municipios: Municipio[];
  marcas: Marca[];
  modelos: Modelo[];
  versiones: Version[];
  usuario: boolean = false;
  coberturas: Cobertura[];
  coberturaSelect: Cobertura;
  datosPersonaOtroComponente: DatosPersonas;
  datosVehiculoOtroComponente: DatosVehiculo;
  confirmaPersona = true;
  confirmaVehiculo = true;
  usuarioOutput: string = '';

  @ViewChild(DatosVehiculoComponent) datosVehiculoComponent: DatosVehiculoComponent;


  constructor(public _mercantilService: MercantilService, private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
      this.municipios = [];
      this.provincias = [];
      this.marcas = [];
      this.getProvinciaService();
      this.getMarcasService();
      this._mercantilService.getCoberturas().then((data: any) => {
      this.coberturas = data;
      });
  
  }

  confirmarDatosPersonales() {
    this.confirmaPersona = !this.confirmaPersona;
  }

  confirmarDatosVehiculo() {
    this.confirmaVehiculo = !this.confirmaVehiculo;
  }

  getProvinciaService() {
    this._mercantilService.getProvincias().subscribe((res: any) => {
      this.provincias = res.provincias;
    })
  }

  ////////////// AUTOCOMPLETE MUNICIPIO //////////////
  // Seleccion con click para la provincia
  clickSelectedProvincia(nombre: string) {

    this._mercantilService.getMunicipio(nombre).subscribe((res: any) => {
      this.municipios = res.municipios;
    })
  }
  ////////////// FIN AUTOCOMPLETE MUNICIPIO //////////////


  usuarioDisponible(usuario) {
    this._mercantilService.getUsuario(usuario).subscribe((res: any) => {
      this.usuario = res;
    })
  }

  //////MARCAS//////
  getMarcasService() {
    this._mercantilService.getMarcas().subscribe((res: any) => {
      this.marcas = res;
    })
  }

  ////////MODELOS///////
  selectedCodMarcas(datos) {
    // alert("datosMarca"+datos.marca)
    this._mercantilService.getModelos(datos.marca, datos.anio).subscribe((res: any) => {
      this.modelos = res;
      this.datosVehiculoComponent.obtenerModelo(this.modelos);
    })
  }

  /////VERSIONES VER//////
  seleccionModeloEmitidos(datos) {
    this._mercantilService.getVersiones(datos.marca, datos.anio, datos.mod).subscribe((res: any) => {
      this.versiones = res;
      this.datosVehiculoComponent.obtenerVersion(this.versiones);


    })
  }

  //// COBERTURAS
  selectCobertura(event) {
    this.coberturaSelect = event;
  }

  datosPersonaHijos( dato ) {
    this.datosPersonaOtroComponente = dato;
  }

  datosVehiculoHijos( dato ){
    this.datosVehiculoOtroComponente = dato;
  }

}


