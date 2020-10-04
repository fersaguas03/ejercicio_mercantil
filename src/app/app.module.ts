//ANGULAR
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

//RUTAS
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';

//MODULOS
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './pages/home/home.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PanelModule} from 'primeng/panel';


import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DatosPersonaComponent } from './pages/home/datos-persona/datos-persona.component';
import { DatosVehiculoComponent } from './pages/home/datos-vehiculo/datos-vehiculo.component';
import { DatosCoberturaComponent } from './pages/home/datos-cobertura/datos-cobertura.component';
import {KeyFilterModule} from 'primeng/keyfilter';



@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    DatosPersonaComponent,
    DatosVehiculoComponent,
    DatosCoberturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //MODULOS PrimeNg
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    PanelModule,
    TabViewModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    InputTextareaModule,
    InputMaskModule,
    KeyFilterModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
