import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Cobertura } from '../model/cobertura';


@Injectable({
  providedIn: 'root'
})
export class MercantilService {

  constructor(private http: HttpClient) {

  }

  urlBaseAPIGeo = "https://apis.datos.gob.ar/georef/api";
  urlBaseAPIMercantil = "https://servicios.qamercantilandina.com.ar/api/v1/vehiculos";
  urlBaseAPIMOCK = "https://servicios.qamercantilandina.com.ar/api_mock_frontend/v1";

  // https://apis.datos.gob.ar/georef/api/provincias
  // https://apis.datos.gob.ar/georef/api/municipios?provincia=Mendoza&campos=id,nombre&max=130&nombre=San Martín
    //  https://apis.datos.gob.ar/georef/api/provincias/municipios?provincia=Mendoza&campos=id,nombre&max=130

  getProvincias() : Observable<any>{
    const urlProvincia = this.urlBaseAPIGeo + "/provincias";
    return this.http.get( urlProvincia );
  }
  


  getMunicipio( nombreProvincia: string ): Observable<any>{
    const urlMunicipio = this.urlBaseAPIGeo + "/municipios?provincia=" +  nombreProvincia + "&campos=id,nombre&max=130";
    return this.http.get( urlMunicipio );
  }

  // https://servicios.qamercantilandina.com.ar/api_mock_frontend/v1/usuarios?nombre=armando.socrates
  getUsuario( nombre: string ){
    const urlUsuario = this.urlBaseAPIMOCK + "/usuarios?nombre=" + nombre;
    return this.http.get( urlUsuario );
  }



  // https://servicios.qamercantilandina.com.ar/api/v1/vehiculos/marcas

  getMarcas(){
    const urlMarcas = this.urlBaseAPIMercantil + "/marcas";
    return this.http.get( urlMarcas );
  }

  
  // https://servicios.qamercantilandina.com.ar/api/v1/vehiculos/marcas/32/2010

  getModelos( codigoMarca: string, anio: string ): Observable<any>{

    const urlVehiculos = this.urlBaseAPIMercantil + "/marcas/" + codigoMarca + "/" + anio;
    return this.http.get( urlVehiculos );

    
  }

  // https://servicios.qamercantilandina.com.ar/api/v1/vehiculos/marcas/32/2010/207

  getVersiones( codigoMarca: string, anio: string, modeloVehiculo:string ): Observable<any>{
    const urlVersiones = this.urlBaseAPIMercantil + "/marcas/" + codigoMarca  + "/" + anio + "/" + modeloVehiculo;
    return this.http.get( urlVersiones );
  }


  // https://servicios.qamercantilandina.com.ar/api_mock_frontend/v1/coberturas
  getCoberturas(){
    const urlCobertura = this.urlBaseAPIMOCK + "/coberturas";
    return this.http.get<any>( urlCobertura ).toPromise()
    .then(res => <Cobertura[]>res.data)
    .then( data =>{ return data;});
  }

 
//   getProductsSmall() {
//     return this.http.get<any>('assets/products-small.json')
//     .toPromise()
//     .then(res => <Product[]>res.data)
//     .then(data => { return data; });
// }


  

}
