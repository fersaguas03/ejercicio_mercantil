import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Cobertura } from 'src/app/model/cobertura';
// import { Cobertura } from 'src/app/model/cobertura';
import { MercantilService } from 'src/app/services/mercantil.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-datos-cobertura',
  templateUrl: './datos-cobertura.component.html',
  styleUrls: ['./datos-cobertura.component.scss'],
  providers:[MessageService]
})
export class DatosCoberturaComponent implements OnInit {

  @Input() coberturas: Cobertura[];
  @Output() selectedCobertura: EventEmitter<Cobertura[]> = new EventEmitter<Cobertura[]>();
  selectedProduct2: Cobertura;



  constructor(private _mercantilService: MercantilService, public messageService: MessageService) {

  }

  ngOnInit(): void {
    
  }


  onRowSelectCobertura(event){
    // alert(event.titulo)
    this.messageService.add({ severity: 'success', summary: 'Cobertura Seleccionada', detail: event.titulo })
    console.log(event.titulo);
    this.selectedCobertura.emit(event);
    
  }

  onRowUnselectCobertura(event){
    this.messageService.add({ severity: 'info', summary: 'Cobertura fue quitada', detail: event.titulo })
  }
}
