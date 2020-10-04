import { Component, OnInit, Version } from '@angular/core';
import { Provincia } from 'src/app/model/provincia';
import { Municipio } from 'src/app/model/municipio';
import { MercantilService } from 'src/app/services/mercantil.service';
import { Marca } from 'src/app/model/marca';
import { Modelo } from 'src/app/model/modelo';

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
  nombreProvincia: string = "Mendoza";
 

  constructor( public _mercantilService: MercantilService) {
   
   }

  ngOnInit(): void {
    this.getProvinciaService();
    this.getMunicipioService();
    this.getMarcasService();
    // this.provincias = [
    //   {
    //     "id": "",
    //     "nombre": ""
    //   }
    // ]
  }



  getProvinciaService(){
    this._mercantilService.getProvincias().subscribe( (res:any) =>{
      this.provincias = res.provincias;
      console.log( this.provincias);  
    })
  }

  getMunicipioService(){
    this._mercantilService.getMunicipio( this.nombreProvincia ).subscribe( (res:any) =>{
      this.municipios = res.municipios;
      console.log(this.municipios);
      
    });
  }

  getMarcasService(){
    this._mercantilService.getMarcas().subscribe( (res:any) =>{
      this.marcas = res;
      console.log(this.marcas);
      
    })
  }




}
