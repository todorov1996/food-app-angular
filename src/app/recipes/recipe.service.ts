import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Burger',
            'A very nice juicy burger!',
            'https://cdn.pixabay.com/photo/2020/11/08/01/44/burger-5722678_1280.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('Cheese', 2)
            ]),
        new Recipe(
            'Schnitzel',
            'This is an amazing schnitzel!',
            'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('Lemon', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}









