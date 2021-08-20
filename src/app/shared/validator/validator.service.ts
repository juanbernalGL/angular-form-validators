import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public namePattern    : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern   : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }


  public userNameForbidden (control: FormControl) : ValidationErrors | null {
    const value = control.value?.trim();
    console.log(`arg`, value);
    if (value === 'beast') {
      return { beast: true };
    }
    return null;
  };

  public equalFields (field1: string, field2: string) {
      return (formGroup: AbstractControl) : ValidationErrors | null =>  {
        console.log(`formGroup`, formGroup);

        const pass1 = formGroup.get(field1)?.value;
        const pass2 = formGroup.get(field2)?.value;
        
        if( pass1 !== pass2 ) {
          return { notEqual: true }
        }
        return null;
      }
  }
}
