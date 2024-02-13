import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailfilterdomain]'
})
export class EmailfilterdomainDirective implements Validator {

  @Input() dominiosvalidos:string[] = []

  constructor(private inputElement:ElementRef, private render2:Renderer2) { }


  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    //  ponemos defecto color fondo
    this.render2.setAttribute(this.inputElement.nativeElement, 'style', 'background-color: red')
    if (control.value && (control.value as string).indexOf('@')) {
      let _dombuscar = (control.value as string).split('@')[1].split('.')[0] // control.value=mio@dominio.es -> dominio
      
      if(this.dominiosvalidos.some( dom => dom === _dombuscar)){
        this.render2.setAttribute(this.inputElement.nativeElement, 'style', 'background-color: green')
        return null;
      } else {
        return {'emailfilterdoms': {'mensaje': 'dominio invalido de email', 'validos': this.dominiosvalidos}}
      }
    } else {
      return null;
    }
  }
}
