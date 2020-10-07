import { Component, Input, OnInit } from '@angular/core';
import { Cobertura } from 'src/app/model/cobertura';
// import { Cobertura } from 'src/app/model/cobertura';
import { MercantilService } from 'src/app/services/mercantil.service';


@Component({
  selector: 'app-datos-cobertura',
  templateUrl: './datos-cobertura.component.html',
  styleUrls: ['./datos-cobertura.component.css']
})
export class DatosCoberturaComponent implements OnInit {

  selectedCobertura: string;
  public coberturas : Cobertura[];
  //  = [
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
  // ];

  


  // cobertura: Cobertura[];
  // selectedCobertura: Cobertura;

  // cargarCobertura: Cobertura = {
  //   numero: 0,
  //   costo: 0,
  //   producto: '',
  //   texto: '',
  //   franquicia: 0,
  //   codigoProducto: 0,
  //   titulo: '',
  //   descripcion: '',
  //   puntaje: 0,
  //   granizo: false
  // };


  constructor(private _mercantilService: MercantilService) {

  }

  ngOnInit(): void {

    
    
    // console.log(this.cobertura);
    //  this.coberturas = this._mercantilService.getCoberturas();
    this._mercantilService.getCoberturas().then((data:any) => {
      
      this.coberturas = data;
      console.log("data ",data);
    });

    
  }

}
