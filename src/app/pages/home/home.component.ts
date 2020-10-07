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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MercantilService]
})
export class HomeComponent implements OnInit {

  checked: boolean;
  provincias: Provincia[];
  municipios: Municipio[];
  marcas: Marca[];
  modelos: Modelo[];
  versiones: Version[];
  usuario: boolean;
  usuarioOutput: string = 'Silvia.Perez';
  // coberturas: Cobertura[];
  @ViewChild(DatosVehiculoComponent) datosVehiculoComponent: DatosVehiculoComponent;

  // coberturas: Cobertura[] = [];
  // = [
  //   {
  //     numero: 0,
  //     costo: 0,
  //     producto: '',
  //     texto: '',
  //     franquicia: 0,
  //     codigoProducto: 0,
  //     titulo: '',
  //     descripcion: '',
  //     puntaje: 0,
  //     granizo: false
  //   }
  // ]


  constructor(public _mercantilService: MercantilService, private rutaActiva: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.municipios = [];
    this.provincias = [];
    this.marcas = [];
    // this.usuarioOutput = [];

    this.getProvinciaService();
    this.getMarcasService();
    // this.getCoberturasService();
    this.getUsuarioService();
  }

  getProvinciaService() {
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
      console.log("output:" + this.municipios);

    })
  }
  ////////////// FIN AUTOCOMPLETE MUNICIPIO //////////////


  getUsuarioService() {
    //  alert(this.usuarioOutput)
    this._mercantilService.getUsuario(this.usuarioOutput).subscribe((res: any) => {
      this.usuario = res;
      console.log("llegue al servicio:" + this.usuario);

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
    this._mercantilService.getModelos(datos.marca, datos.anio).subscribe((res: any) => {
      this.modelos = res;
      this.datosVehiculoComponent.obtenerModelo(this.modelos);
      console.log("Modelo encontrado: " + this.modelos);
    })
  }

  /////VERSIONES VER//////
  // selectedNomModelos(datos) {
  //   // alert(8)
  //   this._mercantilService.getVersiones(datos.marca, datos.anio, datos.modelo).subscribe((res: any) => {
  //     this.versiones = res;
  //     this.datosVehiculoComponent.obtenerVersion(this.versiones);
  //     console.log("Version encontrada: " + this.versiones);

  //   })
  // }

  // getCoberturasService() {
  //   this._mercantilService.getCoberturas().subscribe((res:any) => {
      
  //     this.coberturas = [
  //       {
  //         numero: res.numero,
  //         costo: res.costo,
  //         producto: res.producto,
  //         texto: res.texto,
  //         franquicia: res.franquicia,
  //         codigoProducto: res.codigoProducto,
  //         titulo: res.titulo,
  //         descripcion: res.descripcion,
  //         puntaje: res.puntaje,
  //         granizo: res.granizo
  //       }
  //     ]
  //     // this.coberturas = res;
  //     console.log(this.coberturas);
  //   })
  // }

  
  // getCoberturasService() {
  //   this._mercantilService.getCoberturas().subscribe((res:any) => {
      
  //     this.coberturas = res;
  //     // this.coberturas = res;
  //     console.log(this.coberturas);
  //   })
  // }





}


