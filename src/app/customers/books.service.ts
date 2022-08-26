import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Books } from './store/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _httpClient: HttpClient) { }
  get() {
    return this._httpClient.get<Books[]>('http://localhost:3000/books');
  }

  create(payload: Books) {
    return this._httpClient.post<Books>('http://localhost:3000/books', payload);
  }

  update(payload: Books) {
    return this._httpClient.put<Books>(`http://localhost:3000/books/${payload.id}`, payload);
  }

  delete(id: number) {
    return this._httpClient.delete(`http://localhost:3000/books/${id}`);
  }
}
