import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, namePattern, userNameForbidden } from 'src/app/shared/validator/validations';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.namePattern) ] ],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern) ] ],
    username: ['', [Validators.required, this.vs.userNameForbidden ] ],
    password: ['', [Validators.required, Validators.minLength(2) ] ],
    password2: ['', [Validators.required  ] ]},
    {
      validators: [ this.vs.equalFields('password', 'password2') ]
    }
    );

  constructor( private fb: FormBuilder,
               private vs: ValidatorService ) { }

  ngOnInit(): void {
      this.myForm.reset({
        name: 'Juan Jose',
        email: 'beast@mail.com',
        username: 'algo'
      })
  }

  isValidField( field: string) {
    return this.myForm.get(field)?.invalid 
           && this.myForm.get(field)?.touched
  }

  save() {
    console.log(`this.myForm.value`, this.myForm.value);
  }

}
