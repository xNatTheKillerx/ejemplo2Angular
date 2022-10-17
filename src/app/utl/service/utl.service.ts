import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';


@Injectable({
  providedIn: 'root'
})
export class UtlService {

  //_ para las variables privadas
private _alumnosUtl:AlumnosUtl[]=[
    {
    nombre:'Mario',
    edad:15,
    },
    {
      nombre:'Lucia',
      edad:22,
    },
    {
      nombre:'Leeonardo',
      edad:21,
    },
    {
      nombre:'Diana',
      edad:21,
    }
  ]

  get alumnos():AlumnosUtl[]{
    return [...this._alumnosUtl];
  }

  constructor() { }
  agregarAlumno(alumno:AlumnosUtl){
  this._alumnosUtl.push(alumno);
  }
}
