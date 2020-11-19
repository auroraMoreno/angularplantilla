import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';
import {Plantilla} from './../models/plantilla';

@Injectable()
export class PlantillaService {

    private url:string;

    constructor(private _http:HttpClient) {
        this.url = Global.urlplantilla;
    }

    getPlantilla():Observable<any>{
        var request="/api/Plantilla";
        return this._http.get(this.url + request);
    }

    detallesEmpleado(id):Observable<any>{
        var request ="/api/Plantilla/" + id;
        return this._http.get(this.url + request);
    }

    buscarFunciones():Observable<any>{
        var request ="​/api/Plantilla/Funciones";
        return this._http.get(this.url + request);
    }

    updateSalario(funcion:string,incremento:number):Observable<any>{
        var request = "/api/Plantilla/" + funcion + "/" + incremento;
        var header=new HttpHeaders();
        return this._http.put(this.url + request,{
            headers:header
        });
    }


}