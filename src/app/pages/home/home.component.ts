import { Component, Input, OnInit, Version, ViewChild } from '@angular/core';
import { Provincia } from 'src/app/model/provincia';
import { Municipio } from 'src/app/model/municipio';
import { MercantilService } from 'src/app/services/mercantil.service';
import { Marca } from 'src/app/model/marca';
import { Modelo } from 'src/app/model/modelo';
import { ActivatedRoute } from '@angular/router';
import { DatosVehiculoComponent } from './datos-vehiculo/datos-vehiculo.component';

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
  anioModelo: any = "Sin datos"
  @ViewChild(DatosVehiculoComponent) datosVehiculoComponent: DatosVehiculoComponent;

  constructor( public _mercantilService: MercantilService, private rutaActiva: ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.municipios = [];
    this.provincias = [];
    this.marcas = [];
   
    this.getProvinciaService();
    this.getMarcasService();
  }

  getProvinciaService(){
    this._mercantilService.getProvincias().subscribe( (res:any) =>{
      this.provincias = res.provincias;
      console.log( this.provincias);  
    })
  }


  getMarcasService(){
    this._mercantilService.getMarcas().subscribe( (res:any) =>{
      this.marcas = res;
     // console.log("marca: "+this.marcas);
      
    })
  }

  ////////////// AUTOCOMPLETE MUNICIPIO //////////////
  // Seleccion con click para la provincia
  clickSelectedProvincia( nombre: string ){

    this._mercantilService.getMunicipio( nombre ).subscribe( (res:any) =>{
      this.municipios = res.municipios;
      console.log( "output:" +this.municipios);
      
    })

  }
  ////////////// FIN AUTOCOMPLETE MUNICIPIO //////////////



  obtengoAnio(e){
    console.log(e);
    this.anioModelo = e;
  }

  selectedCodMarcas( datos ){
    this._mercantilService.getModelos( datos.marca, datos.anio ).subscribe( (res:any) =>{
      this.modelos = res;
      this.datosVehiculoComponent.obtenerModelo( this.modelos );
      console.log("Modelo encontrado: " + this.modelos);
    })
  }



}
