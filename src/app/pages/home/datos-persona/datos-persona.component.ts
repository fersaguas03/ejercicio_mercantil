import { Component, Input, OnInit } from '@angular/core';
import { Municipio } from 'src/app/model/municipio';
import { Provincia } from 'src/app/model/provincia';

@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css']
})
export class DatosPersonaComponent implements OnInit {

  @Input() public provincias: Provincia[];
  @Input() public municipios: Municipio[];

  selectedProvincia: any[];
  filteredProvincias: any[];
  selectedMunicipio: any[];
  filteredMunicipios: any[];

  text: string;
  constructor() { }

  ngOnInit(): void {
  }


  filterProvincia(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.provincias.length; i++) {
      let provincia = this.provincias[i];
      if (provincia.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(provincia);
      }
    }
    this.filteredProvincias = filtered;
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
  }


}
