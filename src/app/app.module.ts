import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {dropDownDirective} from './shared/dropDown.directive'
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


// import { TestToggelComponent } from './test-toggel/test-toggel.component';
// import { basicHighLightDirective } from './test-toggel/directive/basic-highlight.directive';
// import { AppAdvDirectiveDirective } from './test-toggel/directive/app-adv-directive.directive';
// import { HostBindingDirective } from './test-toggel/directive/host-binding.directive';
// import { UnlessDirective } from './test-toggel/directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    dropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent

    //  TestToggelComponent,
    //  basicHighLightDirective,
    //  AppAdvDirectiveDirective,
    //  HostBindingDirective,
    //  UnlessDirective
  ],

    imports: [BrowserModule, HttpClientModule, FormsModule,AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
