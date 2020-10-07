import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';
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
  @Input() public usuario;
  @Output() public selectedNombreProvincia: EventEmitter<string> = new EventEmitter<string>();
  @Output() public usuarioInput = new EventEmitter();

  form:FormGroup;


  selectedProvincia: Provincia = { id: '', nombre: '', municipioList: []};
  filteredProvincias: any[];
  selectedMunicipio: any[];
  filteredMunicipios: any[];
  text: string;
  nombreUsuarioModelo: string;


  constructor( private activatedRoute: ActivatedRoute, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.provincias = [];
    this.municipios = [];

    this.form = this.fb.group({
      'dni': new FormControl('', Validators.compose([Validators.required, Validators.min(7), Validators.max(8)])),
      'apellido': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])),
      'nombre': new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])),
      'email': new FormControl('', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")),
      'celular': new FormControl('', Validators.compose([Validators.min(10), Validators.max(11)])),
      'telefono': new FormControl('', Validators.compose([Validators.min(10), Validators.max(11)])),
      'provincia': new FormControl('', Validators.required),
      'municipio': new FormControl('', Validators.required),
      'fechaNacimiento': new FormControl('', [Validators.required, fechaNacValidator]),
      'usuarios': new FormControl('', Validators.required),
      'contrasenia': new FormControl('',Validators.compose([Validators.required, Validators.pattern("[A-Z] {1}, [a-z] {5}, [0-9]{2}")]))
    });

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


  guardarDatosPersona(){
    console.log(this.form.value);
    console.log(this.form);
    
  }
  
}
