import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector:'[customMin][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CustomMinDirective,
            multi: true

        }
    ]
})
export class CustomMinDirective implements Validator {
    @Input() minimum!: number;

    constructor() {
        console.log(`minimum`, this.minimum);
    }

    validate( control: FormControl) {
        const inputValue = control.value;
        console.log(`inputValue`, inputValue);
        console.log(`this.minimum`, this.minimum)
        return (inputValue < this.minimum ) 
            ? { 'customMin': true }
            : null;
    }
}