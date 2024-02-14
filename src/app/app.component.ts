import { Component, Inject } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { ICliente } from './models/cliente.model';
import { TOKEN_SERVICIO_STORAGE } from './services/injectiontokenstorageservice';
import { IStorageService } from './models/interfacesservicios.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public routerEvent$:Observable<RouterEvent>;

  public patron:RegExp= new RegExp("(/Cliente/(Login|Registro)|/Tienda/MostrarPedido)", "g")

  public cliente$:Observable<ICliente | null>;

  public libroABuscar:string = '';
  mostrarResultados: boolean = false;
  resultadosBusqueda: any[] = [];

  constructor(private router:Router, @Inject(TOKEN_SERVICIO_STORAGE) private storageService:IStorageService) {

    this.cliente$ = storageService.RecuperarDatosCliente()

    this.routerEvent$=router.events.pipe(
      map(ev => ev as RouterEvent),
      filter((ev, pos) => ev instanceof NavigationStart )
    )
   }
}
