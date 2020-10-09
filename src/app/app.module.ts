//ANGULAR
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { MercantilService } from './services/mercantil.service';
import { GranizoPipe } from './pipes/pipeCobertura.pipe';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { MostrarDatosComponent } from './pages/home/mostrar-datos/mostrar-datos.component';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';




@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    DatosPersonaComponent,
    DatosVehiculoComponent,
    DatosCoberturaComponent,
    MostrarDatosComponent,
    //Pipes
    GranizoPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    TableModule,
    ToastModule,
    ProgressSpinnerModule,
    TooltipModule,
    DialogModule,
    RippleModule
  ],
  providers: [MercantilService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
