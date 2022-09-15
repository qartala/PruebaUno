import { Component, Input } from '@angular/core';
import { Seccion } from './../../modelos/seccion';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent  {
  @Input () seccion!:Array<Seccion>;

}

