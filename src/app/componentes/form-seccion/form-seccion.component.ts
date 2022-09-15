import { Component,Output,EventEmitter } from '@angular/core';
import{Seccion} from 'src/app/modelos/seccion';

@Component({
  selector: 'app-form-seccion',
  templateUrl: './form-seccion.component.html',
  styleUrls: ['./form-seccion.component.scss']
})
export class FormSeccionComponent  {

  @Output() public s = new EventEmitter<Seccion>();
  public seccion: Seccion={
  nombreSeccion:'',
}
public cambiarSeccion (evento: Event): void{
  const nuevaSeccion= evento.target as HTMLInputElement;
  this.seccion.nombreSeccion=nuevaSeccion.value;

}
public crearClase(): void{
  const c2: Seccion={...this.seccion};
  this.s.emit(c2);
  this.seccion.nombreSeccion=' ';


}

}
