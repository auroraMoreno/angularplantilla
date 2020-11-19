import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing,appRoutingProvider} from './app.routing';

import {PlantillaService} from './services/plantilla.service';

import { AppComponent } from './app.component';
import {PlantillaComponent} from './components/plantilla/plantilla.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';
import { ModificarsalarioComponent } from './components/modificarsalario/modificarsalario.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    DetallesempleadoComponent,
    ModificarsalarioComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routing
  ],
  providers: [appRoutingProvider,PlantillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
