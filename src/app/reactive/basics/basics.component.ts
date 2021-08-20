import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  // myForm: FormGroup = new FormGroup({
  //   product : new FormControl('RTX'),
  //   price   : new FormControl(1500),
  //   stock   : new FormControl(48)
  // });

  myForm: FormGroup = this.fb.group({
    //          Value, sync validator, async validator
    product : [ '', [Validators.required, Validators.minLength(3) ]  ],
    price   : [ 0, [Validators.required, Validators.min(100)] ],
    stock   : [ 0, [Validators.required, Validators.min(100)] ]
  })
  constructor( private fb: FormBuilder) {

  }

  ngOnInit(): void {
   this.myForm.reset({
     product: 'Tennis',
     price: 500,
   })
    
  }

  isValidField( field:string ) {
    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }

  save() {
    console.log(`this.myForm.value`, this.myForm.value)
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
  }
}
