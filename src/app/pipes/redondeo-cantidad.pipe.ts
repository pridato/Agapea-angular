import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'redondeoCantidad'
})
export class RedondeoCantidadPipe implements PipeTransform {

  transform(value: number, numeroDecimales:number=2): number {
    return Math.round(value * 10**numeroDecimales)/10**numeroDecimales;
  }

}
