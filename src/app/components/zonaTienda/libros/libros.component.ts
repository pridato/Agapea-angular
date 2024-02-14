import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ILibro } from 'src/app/models/libro.model';
import { RestnodeService } from 'src/app/services/restnode.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  public listaLibros:ILibro[] = []

  constructor(private restService: RestnodeService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParamMap.subscribe(
      async (param:ParamMap)  =>   {
        let _idcat = param.get('idcat') || '2-10'
        console.log(_idcat)
        this.listaLibros = await this.restService.RecuperarLibros(_idcat)
        console.log(this.listaLibros)
      }
    )
  }
  
  
}
