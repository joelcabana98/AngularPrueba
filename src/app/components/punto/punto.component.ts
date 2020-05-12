import { Component, OnInit } from '@angular/core';
import {PuntoInteres} from './../../models/punto-interes';
import { PuntoService } from 'src/app/service/punto.service';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-punto',
  templateUrl: './punto.component.html',
  styleUrls: ['./punto.component.css']
})
export class PuntoComponent implements OnInit {

  puntoInteres : PuntoInteres;
  puntosIntereses : Array<PuntoInteres>;
  urlTest : string;



  constructor(private puntoService:PuntoService) { 
    this.puntoInteres = new PuntoInteres();
    this.puntosIntereses = new Array<PuntoInteres>();
    this.urlTest = "http://www.google.com/maps/place/";
    this.refrescarPuntos();
  }

  ngOnInit(): void {
  }

  //metodo
  actualizarUrlTest(){
    this.urlTest = "http://www.google.com/maps/place/" + this.puntoInteres.latitud + ", "+ this.puntoInteres.longitud;
  }
  
  guardarPunto(){
    this.puntoInteres.ultimaModificacion = new Date();
    //this.puntosIntereses.push(this.puntoInteres);
     this.puntoService.addPunto(this.puntoInteres);
    this.puntoInteres = new PuntoInteres();
    this.refrescarPuntos();
  }

  refrescarPuntos(){
    this.puntosIntereses = this.puntoService.getPuntos();
  }

  elegirPunto(punto:PuntoInteres){
    this.puntoInteres = punto;
  }

  borrarPunto(punto:PuntoInteres){  
    this.puntoService.deletePunto(punto);
    this.refrescarPuntos();
  }

  limpiar(){
    this.puntoInteres = new PuntoInteres();
  }

  modificarPunto(){
    this.puntoService.updatePunto(this.puntoInteres);
    this.puntoInteres = new PuntoInteres();
    this.refrescarPuntos();
  }
  

  
}
