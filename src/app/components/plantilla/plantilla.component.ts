import { Component, OnInit } from '@angular/core';
import {PlantillaService} from './../../services/plantilla.service';
import {Plantilla} from './../../models/plantilla';


@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  public plantilla: Array<Plantilla>;

  constructor(private _service:PlantillaService) { 
    this.plantilla = []
  }

  getPlantilla(){
    this._service.getPlantilla().subscribe(response=>{
        this.plantilla = response;
    },error=>{
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getPlantilla();
  }

}
