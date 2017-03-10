import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const API_URL = 'https://api.github.com';

@Injectable()
export class UsersService {
  public onUsersUpdate$ = new EventEmitter();

  constructor(private http: Http) { }

  getUsers(searchObj) {
    let q = 'q=';
    if (searchObj.username) {
      q += `${searchObj.username}+in%3Alogin`;
    }
    if (searchObj.language) {
      q += `+language%3A${searchObj.language}`;
    }
    if (!searchObj.username && !searchObj.language) {
      q += '*===empty===*';
    }

    return this.http.get(`${API_URL}/search/users?${q}`)
      .map(res => res.json());
  }

  shareUsers(users) {
    this.onUsersUpdate$.next(users);
  }

}
