import { Component, Output,EventEmitter } from '@angular/core';
import { Alumno, TipoSeccion } from './../../modelos/alumno';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.scss']
})
export class FormAlumnoComponent {


  @Output() public a =new EventEmitter< Alumno>();
  public seleccion: string = '';
  public Alumno: Alumno = {
    Rut:'',
    Nombre:'',
    Apellido:'',
    Edad:0 ,
    Tipo:'Online',
   }

   public otroRut(evento: Event):void {
    const nuevoRut= evento.target as HTMLInputElement;
    this.Alumno.Rut= nuevoRut.value;
   }
   public otroNombre(evento: Event): void{
    const responsable= evento.target as HTMLInputElement;
    this.Alumno.Nombre= responsable.value;
   }
   public otroApellido(evento: Event): void{
    const nuevoApellido= evento.target as HTMLInputElement;
    this.Alumno.Apellido= nuevoApellido.value;

   }
   public otroEdad(evento: Event): void{
    const elemento =evento.target as HTMLInputElement;
    this.Alumno.Edad = Number.parseInt(elemento.value);
   }
     public otroTipo (evento: Event): void{
      const tipo= evento.target as HTMLSelectElement;
      this.Alumno.Tipo= tipo.value as TipoSeccion;
     }


   public Registrar(): void{
    const c1: Alumno={...this.Alumno};
    this.a.emit(c1);
    this.Alumno.Rut='';
    this.Alumno.Nombre='';
    this.Alumno.Apellido='';
    this.Alumno.Edad=0;
    this.Alumno.Tipo='Online';

   }

}
