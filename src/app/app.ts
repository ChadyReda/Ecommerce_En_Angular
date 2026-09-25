import { Component, signal } from '@angular/core';
import { CollectionItemCard} from './components/collection-item-card/collection-item-card';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [CollectionItemCard],
})
export class App {
  protected readonly title = signal('angular-project1');
}
