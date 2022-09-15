import { Component, Input } from '@angular/core';
import {Alumno} from 'src/app/modelos/alumno';
import {Seccion} from 'src/app/modelos/seccion';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent  {


  @Input () public alumno!:Alumno;
  
  @Input () public seccion!:Seccion;

  fecha= Date.now();

}
