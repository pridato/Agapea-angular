import { Component, Inject, Input } from '@angular/core';
import { IStorageService } from 'src/app/models/interfacesservicios.model';
import { ILibro } from 'src/app/models/libro.model';
import { TOKEN_SERVICIO_STORAGE } from 'src/app/services/injectiontokenstorageservice';

@Component({
  selector: 'app-mini-libro',
  templateUrl: './mini-libro.component.html',
  styleUrls: ['./mini-libro.component.css']
})
export class MiniLibroComponent {

  @Input() libroAPintar!:ILibro;

  constructor(@Inject(TOKEN_SERVICIO_STORAGE) private storageService:IStorageService) {}

  AddLibroPedido(){
    this.storageService.OperarElementosPedido(this.libroAPintar, 1, 'añadir')
  }
}
