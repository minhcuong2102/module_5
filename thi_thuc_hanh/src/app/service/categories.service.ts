import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryBds} from '../model/categoryBds';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private API = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<CategoryBds[]> {
    return this.httpClient.get<CategoryBds[]>(this.API);
  }

  save(product: CategoryBds): Observable<CategoryBds> {
    return this.httpClient.post<CategoryBds>(this.API, product);
  }

  getById(id: number): Observable<CategoryBds> {
    return this.httpClient.get<CategoryBds>(`${this.API}/${id}`);
  }

  update(id: number, product: CategoryBds): Observable<CategoryBds> {
    return this.httpClient.put<CategoryBds>(`${this.API}/${id}`, product);
  }

  delete(id: number): Observable<CategoryBds> {
    return this.httpClient.delete<CategoryBds>(`${this.API}/${id}`);
  }

  // search(name: string, idType: string): Observable<CategoryBds[]> {
  //   let url = this.API + '?name_like=' + name;
  //   if (idType) {
  //     url += '&category.id=' + idType;
  //   }
  //   return this.httpClient.get<CategoryBds[]>(url);
  // }
}
