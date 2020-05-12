import { Injectable } from '@angular/core';
import { PuntoInteres } from '../models/punto-interes';

@Injectable({
  providedIn: 'root'
})
export class PuntoService {

   puntosInteres:Array<PuntoInteres>;

  constructor() {
    this.puntosInteres = new Array<PuntoInteres>();
   }



  getPuntos(){
    return this.puntosInteres;
  }
  
  addPunto(punto:PuntoInteres){
    console.log("entro a add puntos service");
    punto.id = this.getIdDisponible();
    this.puntosInteres.push(punto);
    console.log("saliendo de add puntos service");
  }

  deletePunto(punto:PuntoInteres){
   var idBorrar = this.puntosInteres.findIndex((item: PuntoInteres)=>item.id == punto.id);
    this.puntosInteres.splice(idBorrar,1);
  }

  updatePunto(punto:PuntoInteres){
    var idBorrar = this.puntosInteres.findIndex((item: PuntoInteres)=>item.id == punto.id);
    this.puntosInteres.splice(idBorrar,1,punto);
  }

  getIdDisponible(){
    var maxId: number;
    maxId = 0;

    for(var i = 0; i < this.puntosInteres.length;i++){
      if(maxId < this.puntosInteres[i].id){
        maxId = this.puntosInteres[i].id;
      }
    }
  return (maxId + 1);
  }

}
