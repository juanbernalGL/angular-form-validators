import { FormControl } from "@angular/forms";

export const namePattern    : string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern   : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const userNameForbidden = ( control: FormControl) => {
    const value = control.value?.trim();
    console.log(`arg`, value);
    if( value === 'beast'){
      return { beast: true }
    }
    return null
  } 