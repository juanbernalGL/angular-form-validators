import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender:[ 'M', Validators.required ],
    notifications: [ true, Validators.required ],
    terms: [ false, Validators.requiredTrue ]
  });

  person = {
    gender: 'F',
    notifications: false
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset( this.person );


    this.myForm.get('terms')?.valueChanges.subscribe( c => {
      console.log(`terms`, c);
    })

    this.myForm.valueChanges.subscribe( form => {
      console.log(`form`, form);
    })
  }

  save() {
    console.log(`this.myForm.value`, this.myForm.value);
    const formValue = this.myForm.value;
  }

}
