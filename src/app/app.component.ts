import { Component } from '@angular/core';
import { User } from './shared/models/user';
import { MatSnackBar } from '@angular/material';
import { GithubService } from './services/github.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public user: User;
  public loading: boolean;

  constructor(
    private snackBar: MatSnackBar,
    private githubService: GithubService) {}

  search(username: string) {
    this.loading = true;
    this.githubService.getUser(username)
      .subscribe(
        user  => this.user = window['user'] = user,
        error => this.handleError(error)
      )
      .add(() => this.loading = false);
  }
  newSearch(username: string) {
    if (!username) {
      this.user = undefined;
    } else {
      this.search(username);
    }
  }

  handleError(error: HttpErrorResponse) {
    return (error.status === 404)
      ? this.snackBar.open('User not Found!', 'OK')
      : (error.status === 403)
        ? this.snackBar.open('Github API request rate limit exceeded for your IP address.', 'OK')
        : null;
  }
}
