import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  api = 'https://api.github.com';
  username: string;

  userdata: object;
  repositories: object;
  followers: object;
  following: object;
  events: object;

  debounce;
  loading;

  get since(): string {
    return (new Date(this.userdata['created_at'])).toLocaleDateString();
  }

  constructor(private http: Http) { }

  fetchAll() {
    clearTimeout(this.debounce);
    this.fetchData('userdata', null);
    this.fetchData('repositories', 'repos');
    this.fetchData('followers', 'followers');
    this.fetchData('following', 'following');
    this.fetchData('events', 'events');
  }

  fetchData(property: string = 'userdata', resource) {
    this.loading = true;
    let url = `${this.api}/users/${this.username}`;
    url = (resource) ? `${url}/${resource}` : url;
    this.http.get(url)
    .map(data => data.json())
    .subscribe(data => {
      this[property] = data;
      this.loading = false;
    });
  }

  checkEnter(e) {
    if (e.keyCode === 13) {
      this.fetchAll();
    }
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.fetchAll();
    }, 6000);
  }

  newSearch(event) {
    this.userdata = null;
    if (event) {
      this.username = event;
      this.fetchAll();
    }
  }
}
