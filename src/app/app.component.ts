import { Component } from '@angular/core';
import{Alumno} from './modelos/alumno';

import { Seccion } from './modelos/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title (title:any){
    throw new Error ('Method not implemented');
  }


  public listaAlumno : Array<Alumno>= [];
  public registroAlumno(nuevo: Alumno): void{
    this.listaAlumno.push(nuevo);
  }

  public listaSeccion: Array<Seccion>=[];
  public registroSeccion(nuevo: Seccion): void{
    this.listaSeccion.push(nuevo);
  }
}
