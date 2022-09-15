import { Component, Input } from '@angular/core';
import { registroHistorial } from './../../modelos/registro-historial ';
import{ Seccion} from './../../modelos/seccion';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent  {

  @Input() public historial!:registroHistorial;
  @Input() public seccion!:Seccion;


  fecha= Date.now();

}
