import { Component, EventEmitter, Input, OnInit, Output, Version } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Anios } from 'src/app/model/anios';
import { Marca } from 'src/app/model/marca';
import { Modelo } from 'src/app/model/modelo';

@Component({
  selector: 'app-datos-vehiculo',
  templateUrl: './datos-vehiculo.component.html',
  styleUrls: ['./datos-vehiculo.component.css']
})


export class DatosVehiculoComponent implements OnInit {

  @Input() public marcas: Marca[];
  @Input() public modelos = [];
  @Input() public versiones: Version[];
  @Output() selectedCodMarca = new EventEmitter();
  @Output() anioOutput = new EventEmitter();
  selectedAnio = false;
  selectedModelo = false;
  anios: any[];

  selectedAnios: any;
  marcaSeleccionada: string;
  anioSeleccionado: string;


  selectedMarca: Marca = { desc: '', codigo: '' };
  filteredMarcas: any[];
  selectedModelos: Modelo[];
  filteredModelos: any[];

  anioModelo: string;

  modelosOptions: any[] = [];
  modelo: string;

  constructor() {
    // this.modelo = [];
   
  }

  ngOnInit(): void {
    
    this.marcas = [];
    this.anios = [];
    for (let i = 2000; i < 2021; i++) {
        this.anios.push({label: i, value:i});
    }

  }

  //////// AUTOCOMPLETE MARCA //////////////
  filterMarca(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.marcas.length; i++) {
      let marcas = this.marcas[i];
      if (marcas.desc.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(marcas);
      }
    }
    this.filteredMarcas = filtered;
    console.log(this.filteredMarcas);

  }


  /// Obtengo anio
  mandarAnio(): void {
    this.anioOutput.emit(this.anioModelo);
  }



  clickSelectedMarca(cod: string) {
    this.marcaSeleccionada = cod;

    if( this.anioSeleccionado !== undefined ){
      this.selectedCodMarca.emit({marca: this.marcaSeleccionada, anio: this.anioSeleccionado});
    }
  }

  clickSelectedAnio( anio: number){
    this.anioSeleccionado = anio.toString();

    if( this.marcaSeleccionada !== undefined ){
      this.selectedCodMarca.emit({marca: this.marcaSeleccionada, anio: this.anioSeleccionado});
    }
  }


  obtenerModelo( modelos ){
    console.log(modelos);
    
    for (let i = 0; i < modelos.length; i++) {
      this.modelosOptions.push({ label: modelos[i], value: modelos[i]});
    }
  }

}
