import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private sl : ShoppingListService){}

  private recipes: Recipe[] = [
    new Recipe(
      'This is recipe',
      'this is test1',
      'https://image.shutterstock.com/image-vector/deep-linking-icon-monochrome-sign-600w-2059385705.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'This is Another recipe',
      'this is test2',
      'https://image.shutterstock.com/image-vector/deep-linking-icon-monochrome-sign-600w-2059385705.jpg',

      [new Ingredient('Bread', 1), new Ingredient('Butter', 2)]
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
  addIngToShpList(ing : Ingredient[]){
    this.sl.addIngredients(ing);   
  }
}
