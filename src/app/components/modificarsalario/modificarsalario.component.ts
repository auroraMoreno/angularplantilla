import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Plantilla} from './../../models/plantilla';
import {PlantillaService} from './../../services/plantilla.service';
import {ActivatedRoute,Params,Router} from '@angular/router';

@Component({
  selector: 'app-modificarsalario',
  templateUrl: './modificarsalario.component.html',
  styleUrls: ['./modificarsalario.component.css']
})
export class ModificarsalarioComponent implements OnInit {

  public funciones:Array<string>;
  public funcion:Plantilla;
  @ViewChild("selectFuncion") selectFuncion:ElementRef;
  @ViewChild("cajaIncremento") cajaIncremento:ElementRef;

  constructor(private _service:PlantillaService,
              private _router:Router,
              private _activeRoute:ActivatedRoute) { 
                this.funciones=[]
              }

  buscarFunciones(){
    this._service.buscarFunciones().subscribe(response=>{
        this.funciones=response;
        console.log(response);
    });
  }

  updateSalario(){
    var num = parseInt(this.cajaIncremento.nativeElement.value);
    var func = this.selectFuncion.nativeElement.value;
    this._service.updateSalario(func,num).subscribe(response=>{
      this._router.navigate(["/"]); //aqui hacer component y ponerle la ruta ese 
    },error=>{
      console.log(error);
    });

  }

  ngOnInit(): void {
    this.buscarFunciones();
  }

}
