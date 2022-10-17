import { Component, EventEmitter, Input, Output} from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../service/utl.service';
import { UtlModule } from '../utl.module';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //@Input() alumnosUtl:AlumnosUtl[]=[];
  @Input() regAlum:AlumnosUtl={
    nombre: '',
    edad:0
  }

  @Output() onNuevoAlumnos:EventEmitter<AlumnosUtl>=new EventEmitter();
  constructor(private UtlService:UtlService){

  }

  agregar(){
    //console.log(this.alumnosUtl);
    //this.alumnosUtl.push(this.regAlum);
    //this.UtlService.mostrarSaludo();
    this.onNuevoAlumnos.emit(this.regAlum);
    this.regAlum={
      nombre:'',
      edad:0
    }
  }

}
