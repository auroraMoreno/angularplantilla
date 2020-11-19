import { Component, OnInit } from '@angular/core';
import {PlantillaService} from './../../services/plantilla.service';
import {Plantilla} from './../../models/plantilla';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-detallesempleado',
  templateUrl: './detallesempleado.component.html',
  styleUrls: ['./detallesempleado.component.css'],
  providers:[PlantillaService]
})
export class DetallesempleadoComponent implements OnInit {

  public empleado:Plantilla;

  constructor(private _service:PlantillaService, 
    private _activeRoute:ActivatedRoute) { }

    detallesEmpleado(id){
      console.log(id);
      this._service.detallesEmpleado(id).subscribe(response=>{
        this.empleado=response;
      },error=>{
        console.log(error);
      });
    }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
        var idEmpleado = params.id;
        this.detallesEmpleado(idEmpleado);
    });
  }

}
