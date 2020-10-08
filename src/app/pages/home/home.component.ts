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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MercantilService]
})
export class HomeComponent implements OnInit {

  loading: boolean;
  checked: boolean;
  provincias: Provincia[];
  municipios: Municipio[];
  marcas: Marca[];
  modelos: Modelo[];
  versiones: Version[];
  usuario: boolean = false;
  coberturas : Cobertura[];
  coberturaSelect: Cobertura;
  // datosPersonales: DatosPersonales;
  // datosVehiculo: DatosVehiculo;
  confirmaPersona = true;
  confirmaVehiculo = true;

  usuarioOutput: string = '';

  @ViewChild(DatosVehiculoComponent) datosVehiculoComponent: DatosVehiculoComponent;


  constructor(public _mercantilService: MercantilService, private rutaActiva: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.municipios = [];
    this.provincias = [];
    this.marcas = [];

    this.getProvinciaService();
    this.getMarcasService();
    // this.getCoberturasService();

    this._mercantilService.getCoberturas().then((data:any) => {
      this.coberturas = data;
      console.log("data ",data);
    });

  }

  confirmarDatosPersonales(){
    this.confirmaPersona = !this.confirmaPersona;
  }

  confirmarDatosVehiculo(){
    this.confirmaVehiculo = !this.confirmaVehiculo;
  }

  getProvinciaService() {
    // setInterval(() => {
    //   this.loading = false;
    // }, 3000);
    this._mercantilService.getProvincias().subscribe((res: any) => {
      this.provincias = res.provincias;
      console.log(this.provincias);
    })
  }


  ////////////// AUTOCOMPLETE MUNICIPIO //////////////
  // Seleccion con click para la provincia
  clickSelectedProvincia(nombre: string) {

    this._mercantilService.getMunicipio(nombre).subscribe((res: any) => {
      this.municipios = res.municipios;
      // console.log("output:" , this.municipios);

    })
  }
  ////////////// FIN AUTOCOMPLETE MUNICIPIO //////////////


  usuarioDisponible( usuario ) {
  
    this._mercantilService.getUsuario(usuario).subscribe((res: any) => {
      this.usuario = res;
      console.log("llegue al servicio:" , this.usuario);
    

    })

  }

  //////MARCAS//////
  getMarcasService() {
    this._mercantilService.getMarcas().subscribe((res: any) => {
      this.marcas = res;
    })
  }


  ////////MODELOS/////
  selectedCodMarcas(datos) {
    // alert("datosMarca"+datos.marca)
    this._mercantilService.getModelos(datos.marca, datos.anio).subscribe((res: any) => {
      this.modelos = res;
      this.datosVehiculoComponent.obtenerModelo(this.modelos);
      // console.log("Modelo encontrado: " , this.modelos);
    })
  }

  /////VERSIONES VER//////
  seleccionModeloEmitidos(datos) {
    // alert("marca "+datos.marca + "anio:"+ datos.anio + "modelo:"+ datos.mod)
    this._mercantilService.getVersiones(datos.marca, datos.anio, datos.mod).subscribe((res: any) => {
      console.log(res);
      
      this.versiones = res;
      this.datosVehiculoComponent.obtenerVersion(this.versiones);


    })
  }

  
  //// COBERTURAS
  selectCobertura( event ){
    this.coberturaSelect = event;
    console.log("selecciono cobertura home ",this.coberturaSelect);
    
  }



}


