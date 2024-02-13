import { AbstractControl, ValidatorFn } from "@angular/forms";

export function compareToValidator(idControlAComparar:string):ValidatorFn {

  return (control:AbstractControl): {[Key:string]: boolean} | null => {

    const valorControl:any = control.value
    const valorAComparar:any = control.parent?.get(idControlAComparar)?.value

    if(valorAComparar === valorControl) return null
   return {'compareTo': false}
  } 

}