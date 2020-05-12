import { Component, OnInit } from '@angular/core';
import {Mensaje} from './../../models/mensaje'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-binding-mensaje',
  templateUrl: './binding-mensaje.component.html',
  styleUrls: ['./binding-mensaje.component.css']
})
export class BindingMensajeComponent implements OnInit {

  mensaje:Mensaje;
  tamMax:number;
  tamTexto:number;

  mensajes: Array<Mensaje>;


  ngOnInit(): void {
  }

  constructor() {
     this.mensaje = new Mensaje();
     this.mensajes = new Array<Mensaje>();
     this.tamMax=30;

   }

   public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
   }

   public enviarMensaje(){
     console.log("anviando mensaje");
     this.mensaje.fecha = new Date();
    this.mensajes.push(this.mensaje);
    this.mensaje = new Mensaje();

   }

 

}
