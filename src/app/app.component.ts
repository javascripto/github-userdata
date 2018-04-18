import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MatSnackBar } from '@angular/material';

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

  constructor(private http: Http, public snackBar: MatSnackBar) { }

  fetchAll() {
    clearTimeout(this.debounce);
    this.fetchData('userdata', null);
    this.fetchData('repositories', 'repos');
    this.fetchData('followers', 'followers');
    this.fetchData('following', 'following');
    this.fetchData('events', 'events');
  }

  fetchData(property: string = 'userdata', resource) {
    if (!this.username) {
      this.openSnackBar("Please fill the input");
      return false;
    }
    this.loading = true;
    let url = `${this.api}/users/${this.username}`;
    url = (resource) ? `${url}/${resource}` : url;
    this.http.get(url)
    .map(data => data.json())
    .subscribe(data => {
      this[property] = data;
      this.loading = false;
    }, res => {
      this.loading = false;
      if (property == 'userdata') {
        if (res.status == 404){
          this.openSnackBar("User name Not found!");
        }
        else if( res.status == 403) {
          this.openSnackBar("Github API request rate limit exceeded for your IP address. Try again later");
        }
      }
    });
  }

  checkEnter(e) {
    if (e.keyCode === 13) {
      return this.fetchAll();
    }
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.fetchAll();
    }, 2500);
  }

  newSearch(event) {
    this.userdata = null;
    if (event) {
      this.username = event;
      this.fetchAll();
    }
  }
  openSnackBar(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 4000
    });
  }
}
