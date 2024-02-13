import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICliente } from '../models/cliente.model';
import { Observable } from 'rxjs';
import { IRestMessage } from '../models/restMessage.model';

@Injectable({
  providedIn: 'root'
})
export class RestnodeService {

  constructor(private _httpCliente:HttpClient) { }

  //#region  ZONA CLIENTE

  public registro(cliente:ICliente): Observable<IRestMessage> {
    console.log('Peticion ajax desde registro...', cliente)
    return this._httpCliente.post<IRestMessage>(
      'http://localhost:3000/api/Cliente/Registro',
      cliente,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    )
  }

  //#endregion

  //#region ZONA TIENDA 

  //#endregion

  //#region ZONA PEDIDO

  //#endregion
}
