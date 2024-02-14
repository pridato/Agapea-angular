import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICliente } from '../models/cliente.model';
import { Observable, lastValueFrom } from 'rxjs';
import { IRestMessage } from '../models/restMessage.model';
import { ILibro } from '../models/libro.model';
import { ICategoria } from '../models/categoria.model';

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

  public activarCuenta(mode:string, code:string, key:string): Observable<IRestMessage> {
    return this._httpCliente.get(
      `http://localhost:3000/api/Cliente/ActivarCuenta?mode=${mode}&code=${code}&key=${key}`) as Observable<IRestMessage>
  }

  public login(credenciales: {email: string; password: string; }): Promise<IRestMessage>
  {
    return lastValueFrom(
      this._httpCliente.post<IRestMessage>(
        'http://localhost:3000/api/Cliente/Login',
        credenciales,
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
    )
  }

  public comprobarEmail(email:string): Observable<IRestMessage> {
    console.log(email)
    return this._httpCliente.get(`http://localhost:3000/api/Cliente/ComprobarEmail?email=${email}`) as Observable<IRestMessage>
  }


  //#endregion

  //#region ZONA TIENDA 

  public RecuperarCategorias(idcat:string): Promise<ICategoria[]> {
    if (!! idcat) idcat = '2-10'
    return lastValueFrom(
      this._httpCliente.get<ICategoria[]>(`http://localhost:3000/api/Tienda/RecuperarCategorias?idcat=${idcat}`)
    )
  }

  public RecuperarLibros(idcat:string) : Promise<ILibro[]> {
    return lastValueFrom(
     this._httpCliente.get(`http://localhost:3000/api/Tienda/RecuperarLibros?idcat=${idcat}`) as Observable<ILibro[]>
    )
  }
  //#endregion

  //#region ZONA PEDIDO

  //#endregion
}
