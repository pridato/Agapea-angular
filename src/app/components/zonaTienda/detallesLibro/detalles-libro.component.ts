import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ILibro } from 'src/app/models/libro.model';
import { RestnodeService } from 'src/app/services/restnode.service';

@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styleUrls: ['./detalles-libro.component.css']
})
export class DetallesLibroComponent {

  public libro$!: Observable<ILibro>

  constructor(private activatedRouter:ActivatedRoute, private restSvc:RestnodeService){

    this.activatedRouter.queryParamMap.subscribe(
      (param:ParamMap) => {
        let isbn:string = param.get('isbn')+''
        this.libro$ =  this.restSvc.RecuperarLibro(isbn)
        this.libro$.subscribe(
          (param:ILibro) => {
            console.log(param)
          }
        )
      }
    )
  }
}
