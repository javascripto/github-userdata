import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GithubService {

  private API = environment.GITHUB_API;

  constructor(private http: HttpClient) {}

  public getUser(username: string): Observable<User> {
    return this.http.get<any>(`${this.API}/${username}`)
      .pipe(map((user: any) => {
        user.repos$     = this.getRepos(username);
        user.events$    = this.getEvents(username);
        user.followers$ = this.getFollowers(username);
        user.following$ = this.getFollowing(username);
        return user;
      }));
  }

  public getRepos(username: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${username}/repos`);
  }

  public getFollowers(username: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${username}/followers`);
  }

  public getFollowing(username: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${username}/following`);
  }

  public getEvents(username: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${username}/events`);
  }

}
