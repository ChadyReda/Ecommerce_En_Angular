import { Component, output, OutputEmitterRef, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-bar.html',
})
export class SearchBar {

  search = model.required<string>();
  searchButtonClicked: OutputEmitterRef<void> = output<void>({alias: "submit"});
  searchClicked() {
    this.searchButtonClicked.emit();
  }
}
