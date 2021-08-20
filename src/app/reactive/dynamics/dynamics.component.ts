import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm: FormGroup = this.fb.group({
    name : [ '', [Validators.required, Validators.minLength(3) ]  ],
    favorites: this.fb.array([
      ['Diablo 3', Validators.required],
      ['Overwatch'],
    ], Validators.required), 
  })

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  newFavorite: FormControl = this.fb.control('', Validators.required);

  ngOnInit(): void {
    this.myForm.reset({
      name: 'El Barto'
    })
  }

  save() {
    console.log(`this.myForm.value`, this.myForm.value, Validators.required);
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
  }

  addFavorite() {
    if(this.newFavorite.invalid){
      return;
    }
    this.favoritesArr.push(this.fb.control(this.newFavorite.value));

    this.newFavorite.reset();
  }

  isValidField( field:string ) {
    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }

  delete(i: number){
    this.favoritesArr.removeAt(i);
  }
  a: any = '';

}
