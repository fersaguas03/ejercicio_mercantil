import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';
import { DatosPersonas } from 'src/app/model/datosPersona';
import { Municipio } from 'src/app/model/municipio';
import { Provincia } from 'src/app/model/provincia';
import { fechaNacValidator } from 'src/app/validators/fechaNac.validators';


@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css'],
  providers: [MessageService]
})
export class DatosPersonaComponent implements OnInit {

  @Input() public provincias: Provincia[];
  @Input() public municipios: Municipio[];
  @Input() usuario : boolean;
  @Input() datosPersonass: DatosPersonas;
  // @Input() datosPersonale: DatoSpER
  @Output() public selectedNombreProvincia: EventEmitter<string> = new EventEmitter<string>();
  @Output() public usuarioInput = new EventEmitter();
  @Output() datosPersonaHijo: EventEmitter<DatosPersonas[]> = new EventEmitter<DatosPersonas[]>();

  form:FormGroup;


  selectedProvincia: Provincia = { id: '', nombre: '' };
  filteredProvincias: any[];
  selectedMunicipio: any[];
  filteredMunicipios: any[];
  text: string;
  nombreUsuarioModelo: string;
  confirmaDatosPersona: boolean;
  mostrarPersona: boolean = true;
  labelSiguiente: string = "Siguiente";
  iconSE: string = "pi pi-arrow-right";

  constructor( private activatedRoute: ActivatedRoute, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.provincias = [];
    this.municipios = [];
    // this.datosPersonale.dni
    // this.datosPersonass.dni
    this.form = this.fb.group({
      'dni': new FormControl('', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(8)])),
      'apellido': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])),
      'nombre': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])),
      'email': new FormControl('', [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'celular': new FormControl('', Validators.compose([Validators.minLength(10), Validators.maxLength(11)])),
      'telefono': new FormControl('', Validators.compose([Validators.minLength(10), Validators.maxLength(11)])),
      'provincia': new FormControl('', Validators.required),
      'municipio': new FormControl('', Validators.required),
      'fechaNacimiento': new FormControl('', [Validators.required, fechaNacValidator]),
      'usuarios': new FormControl('', Validators.required),
      'contrasenia': new FormControl('',Validators.compose([Validators.required, Validators.pattern("[A-Z]{1}[a-z]+[0-9]{2}")]))
    });

  }


  onChangeUsuario( value ){

    this.nombreUsuarioModelo = value;
    // console.log(this.nombreUsuarioModelo);
    this.usuarioInput.emit( this.nombreUsuarioModelo )
  }


  filterProvincia(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.provincias.length; i++) {
      let provincia = this.provincias[i];
      if (provincia.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(provincia);
        // console.log(provincia);
      }
    }
    this.filteredProvincias = filtered;
    // console.log(this.filteredProvincias);
  }

  filterMunicipio(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.municipios.length; i++) {
      let municipio = this.municipios[i];
      if (municipio.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(municipio);
      }
    }
    this.filteredMunicipios = filtered;
    // console.log(this.filteredMunicipios);
  }

  clickSelectedProvincia( nombre: string){
    this.selectedNombreProvincia.emit( nombre );
  }
  
  clickSelectedProvinciaEnter( nombre: string){
    this.selectedNombreProvincia.emit( nombre );
  }

  clickSiguiente(){
    // this.confirmaDatosPersona =+ this.confirmaDatosPersona;
  }

  guardarDatosPersona(){
    console.log(this.form.value);
    this.mostrarPersona = !this.mostrarPersona;
    // console.log(this.form);
    this.datosPersonaHijo.emit(this.form.value);
    console.log(this.labelSiguiente);
    
    if( this.mostrarPersona == true){
      this.labelSiguiente = "Siguiente"
      this.iconSE = "pi pi-arrow-right"
    }
    else{
      this.labelSiguiente = "Editar"
      this.iconSE = "pi pi-pencil"
    }

  }
  
}
