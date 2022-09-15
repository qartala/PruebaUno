export type TipoSeccion=  'Online' |'Presencial'
export interface Alumno {
  Rut:string;
  Nombre: string;
  Apellido: string;
  Edad:number;
  Tipo: TipoSeccion;

}
