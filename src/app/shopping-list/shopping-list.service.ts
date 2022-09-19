import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredient() {
    return this.ingredients.slice();
    //this will not work as we are returning a copy of the original array 
    //but not the original array , so once we add new element to the original 
    //array it is not reflected in the copy array as we didnt add anything in 
    //that array(copied array)
    //To resolve this whenever we add elements to the array we emit the event 
    //this way we get the right array.
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredients(ing : Ingredient[]){
    this.ingredients.push(...ing);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
