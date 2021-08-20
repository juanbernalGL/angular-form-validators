import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Favorite {
  id: number;
  name: string;
}

interface Person {
  firstName: string;
  favorites: Favorite[];
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent{

  @ViewChild('userForm') userForm!: NgForm;

  person: Person = {
    firstName: 'JJ',
    favorites: [
      { id: 1, name: 'Diablo 3' },
      { id: 2, name: 'GOW' },
    ]
  }

  newGame:string = '';

  validName(): boolean {
    return this.userForm?.controls?.firstName?.invalid 
    && this.userForm?.controls?.firstName?.touched;
  }

  addGame() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    };
    this.person.favorites.push({...newFavorite});
    this.newGame = "";
  }

  save() {
    console.log(`Posted Form`);
  }

  delete(index: number) {
    console.log(`index`, index);
    this.person.favorites.splice(index, 1);
    
  }
}
