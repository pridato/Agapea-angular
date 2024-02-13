import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { RestnodeService } from '../services/restnode.service';
import { Observable, last, map, tap } from 'rxjs';
import { IRestMessage } from '../models/restMessage.model';

@Directive({
  selector: '[appComprobacionexistemail]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: ComprobarexistemailDirective, multi:true}
  ]
})
export class ComprobarexistemailDirective {

  constructor(private restService: RestnodeService,
    private inputEmail: ElementRef,
    private render2: Renderer2) { }

    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      this.render2.setAttribute(this.inputEmail.nativeElement, 'style', 'background-color: red')
      console.log(control.value)
      // intentar hacer un signUp si da error es que ya existe esa cuenta
      if((control.value as string).endsWith('.com') || (control.value as string).endsWith('.es')){
        return this.restService.comprobarEmail(control.value).pipe(
          // transformamos a observable 
          tap( (dato:IRestMessage)=> console.log('el servidor me ha devuelto', dato)),
          map( (dato:IRestMessage)=> {
            if (dato.codigo === 0){
              console.log(dato)
              this.render2.setAttribute(this.inputEmail.nativeElement, 'style', 'background-color: green')
              return null;
            } else{
              return {'emailexiste': 'false'}
            }
          }),
          last()
        )   
      }
      else {
        throw new Error('not yet')
      }
       
    }
}
