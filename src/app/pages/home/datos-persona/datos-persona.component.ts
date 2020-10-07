import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';
import { Municipio } from 'src/app/model/municipio';
import { Provincia } from 'src/app/model/provincia';


@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css'],
  providers: [MessageService]
})
export class DatosPersonaComponent implements OnInit {

  @Input() public provincias: Provincia[];
  @Input() public municipios: Municipio[];
  @Input() public usuario;
  @Output() public selectedNombreProvincia: EventEmitter<string> = new EventEmitter<string>();
  @Output() public usuarioInput = new EventEmitter();



  selectedProvincia: Provincia = { id: '', nombre: '', municipioList: []};
  filteredProvincias: any[];
  selectedMunicipio: any[];
  filteredMunicipios: any[];
  text: string;
  nombreUsuarioModelo: string;


  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.provincias = [];
    this.municipios = [];


  }


  onChangeUsuario( value ){

    this.nombreUsuarioModelo = value;
    console.log(this.nombreUsuarioModelo);
    this.usuarioInput.emit( this.nombreUsuarioModelo )
  }




  filterProvincia(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.provincias.length; i++) {
      let provincia = this.provincias[i];
      if (provincia.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(provincia);
        console.log(provincia);
        
      }
    }
    this.filteredProvincias = filtered;
    console.log(this.filteredProvincias);
  }

  filterMunicipio(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.municipios.length; i++) {
      let municipio = this.municipios[i];
      if (municipio.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(municipio);
      }
    }
    this.filteredMunicipios = filtered;
    console.log(this.filteredMunicipios);
    
  }

  clickSelectedProvincia( nombre: string){
    this.selectedNombreProvincia.emit( nombre );
  }
  
  clickSelectedProvinciaEnter( nombre: string){
    this.selectedNombreProvincia.emit( nombre );
  }



  
}
