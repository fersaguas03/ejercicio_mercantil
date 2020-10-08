import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Marca } from 'src/app/model/marca';


@Component({
  selector: 'app-datos-vehiculo',
  templateUrl: './datos-vehiculo.component.html',
  styleUrls: ['./datos-vehiculo.component.css']
})


export class DatosVehiculoComponent implements OnInit {

  @Input() public marcas: Marca[];
  @Input() public modelos = [];
  @Input() public versiones: [];
  @Output() selectedCodMarca = new EventEmitter();
  @Output() anioOutput = new EventEmitter();
  @Output() seleccionModeloEmitido = new EventEmitter();

  selectedAnio = false;
  selectedModelo = false;
  anios: any[];

  selectedAnios: any;
  seleccionModelos: any;
  marcaSeleccionada: string;
  anioSeleccionado: string;

  selectedMarca: Marca = { desc: '', codigo: '' };
  filteredMarcas: any[];
  // selectedModelos: Modelo[];
  filteredModelos: any[];

  anioModelo: string;

  modelosOptions: any[] = [];
  versionOptions: any[] = [];
  modelo: string;
  form:FormGroup;

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.marcas = [];
    this.anios = [];
    for (let i = 2000; i < 2021; i++) {
        this.anios.push({label: i, value:i});
    }

    this.form = this.fb.group({
      'marcaForm': new FormControl('', Validators.required),
      'anioForm': new FormControl('', Validators.required),
      'modeloForm': new FormControl('', Validators.required)
      // ,
      // 'VersionForm': new FormControl('', Validators.required),
    });

  }

  //////// AUTOCOMPLETE MARCA ////////////
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

  clickSelectedMarca(cod: string) {
    this.marcaSeleccionada = cod;
    // alert(this.marcaSeleccionada)
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


  //MODELO
  clickSelectedModelo( mod: string ){
     this.seleccionModelos = mod;
    if( this.anioSeleccionado !== undefined && this.marcaSeleccionada !== undefined ){
      this.seleccionModeloEmitido.emit( {marca: this.marcaSeleccionada, anio: this.anioSeleccionado, mod:this.seleccionModelos} );
    }
  }


  obtenerModelo( modelos ){
    console.log(modelos);
    for (let i = 0; i < modelos.length; i++) {
      this.modelosOptions.push({ label: modelos[i], value: modelos[i]});
    }
  }


  obtenerVersion( versiones ){
    console.log(versiones);

    versiones.forEach(element => {
      this.versionOptions.push({ label : element.desc, value: element.codigo })
    });
  }

  guardarDatosVehiculo(){
    console.log(this.form.value);
    console.log(this.form);
    
  }
}
