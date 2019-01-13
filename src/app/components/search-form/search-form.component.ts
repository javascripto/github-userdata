import { MatSnackBar } from '@angular/material';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  constructor(private snackbar: MatSnackBar) {}

  @Output('Search')
  Search: EventEmitter<string> = new EventEmitter();

  search(username: string) {
    return username ?
      this.Search.emit(username) :
      this.snackbar.open('Please fill the input!', 'OK', { duration: 2000 });
  }
}
