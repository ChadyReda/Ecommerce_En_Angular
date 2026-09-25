import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-collection-item-card',
  templateUrl: './collection-item-card.html',
})
export class CollectionItemCard {
  rarety = input('Legendary');
  name = input('Charizard');
  type = input('Dragon/Fire');
  price = input(10.99);
  image = input('/img/poke1.png');
}
