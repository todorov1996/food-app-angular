import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputReference: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputReference: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void { }

  onAddItem(): void {
    const ingName: string = this.nameInputReference.nativeElement.value;
    const ingAmount: number = this.amountInputReference.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
