import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue: string = '';

  towayProperty: string = 'Initial';
  //Event binding example
  enterdValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    console.log((<HTMLInputElement>eventData.target).value);
  }
}
