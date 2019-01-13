
import { Observable } from 'rxjs/Observable';

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  repos$: Observable<any>;
  events$: Observable<any>;
  followers$: Observable<any>;
  following$: Observable<any>;
}

