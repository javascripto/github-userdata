import { User } from '../../shared/models/user';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent {

  @Input('user') user: User;

  @Output() newSearch: EventEmitter<string> = new EventEmitter();

  search() {
    this.newSearch.emit();
  }

}
