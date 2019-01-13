import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {

  @Input() followers: Observable<any>;
  @Output() newSearch = new EventEmitter();

  constructor() { }

}
