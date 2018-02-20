import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {

  @Input() followers = [];
  @Output() newSearch = new EventEmitter();

  constructor() { }

}
