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
      'Burger recipe',
      'this is Burger',
      'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Bread',
      'this is bread',
      'https://thumbs.dreamstime.com/b/long-loaf-bread-22826883.jpg',

      [new Ingredient('Bread', 1), new Ingredient('Butter', 2)]
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeNew(index : number){
    return this.recipes[index];
  }

  addIngToShpList(ing : Ingredient[]){
    this.sl.addIngredients(ing);
  }
}
