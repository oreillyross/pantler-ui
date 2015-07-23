@Component({
    
    selector: 'ingredient-cmp',
    properties: 'ingredient',
}) 

@View({
    
    directives: [],
    templateUrl: 'ingredient.html'
}) 

class IngredientCmp {
    name: string;
}

