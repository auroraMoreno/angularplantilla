import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlantillaComponent} from './components/plantilla/plantilla.component';
import {DetallesempleadoComponent} from './components/detallesempleado/detallesempleado.component';
import {ModificarsalarioComponent} from './components/modificarsalario/modificarsalario.component';


const appRoutes: Routes =[
{path:"",component:PlantillaComponent},
{path:"detalles/:id",component:DetallesempleadoComponent},
{path:"update",component:ModificarsalarioComponent}
]

export const appRoutingProvider: any[]=[]
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);