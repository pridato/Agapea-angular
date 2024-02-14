import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategoria } from 'src/app/models/categoria.model';
import { RestnodeService } from 'src/app/services/restnode.service';

@Component({
  selector: 'app-panel-tienda',
  templateUrl: './panel-tienda.component.html',
  styleUrls: ['./panel-tienda.component.css']
})
export class PanelTiendaComponent {
  public listaCategorias:ICategoria[] = [];
  public _categoria:string;

  constructor(private restSvc:RestnodeService, private router:Router){
    this._categoria = 'root';
    let a = async () => {
      this.listaCategorias = await restSvc.RecuperarCategorias(this._categoria);
      console.log(this.listaCategorias)
    }
    a()
  }

  public GoToCateogria(ev:Event, cat:ICategoria){
    this._categoria = cat.IdCategoria;
    this.router.navigateByUrl(`/Tienda/Libros/?idcat=${cat.IdCategoria}`)
  }
}
