import { Component, computed, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { CollectionItemCard} from './components/collection-item-card/collection-item-card';
import { SearchBar} from './components/search-bar/search-bar';
import { CollectionItem } from './models/collection-item';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [CollectionItemCard, SearchBar],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class App {
  clicksCount = 0;
  searchText = "";
  itemList: CollectionItem[];
  poke1: CollectionItem;
  poke2: CollectionItem;
  selectedItemIndex = signal(0);
  selectedItem = computed(() => this.itemList[this.selectedItemIndex()]);

  loggEffect = effect(() => {
    console.log('this.selectedItemIndex() = ', this.selectedItemIndex());
  })

  constructor() {
    this.poke1 = new CollectionItem();
    this.poke2 = new CollectionItem();
    this.poke1.name = "Dorion";
    this.poke1.rarety = "Epic";
    this.poke1.type = "Psychic";
    this.poke1.price = 15.99;
    this.poke1.image = "/img/poke2.png";
    this.itemList = [this.poke1, this.poke2];
  }
  incrementCount() {
    this.clicksCount++;
  }
  incrementIndex() {
    this.selectedItemIndex.update((index) => (index + 1) % this.itemList.length);
  }
}
