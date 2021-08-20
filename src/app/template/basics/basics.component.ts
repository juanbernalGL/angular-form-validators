import { Component, OnInit, Input, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  
  
  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: 'First Product',
    price: 1,
    stock: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls.product?.invalid 
    && this.myForm?.controls?.product?.touched;
  }
  validPrice(): boolean {
    this.myForm?.controls?.price?.setErrors(null);
    return this.myForm?.controls?.price?.touched
    && this.myForm?.controls.price?.value < 0;
  }

  // save(myForm: NgForm) {
  // save(myForm: NgForm) {
  save() {
    console.log(`submit Done`, this.myForm.value);
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
  }

}
