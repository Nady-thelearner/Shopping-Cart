import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeNew(this.id);
    });
  }

  addToShoppingList() {
    this.recipeService.addIngToShpList(this.recipe.ingredients);
  }
  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.route });
    //alternative
    this.router.navigate(['../', this.id , 'edit'] , {relativeTo : this.route})
  }
}
