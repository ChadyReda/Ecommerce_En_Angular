import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CollectionItem } from '../../models/collection-item';

@Component({
  imports: [],
  selector: 'app-collection-item-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './collection-item-card.html',
})

export class CollectionItemCard {
  item = input.required<CollectionItem>();
}
