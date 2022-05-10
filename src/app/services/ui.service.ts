import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = BASE_URL + '/users';
    return this._http.get<User[]>(url);
  }
}
