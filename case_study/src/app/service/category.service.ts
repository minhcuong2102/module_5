import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) {
  }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API);
  }

  saveCategory(category: Category): Observable<Product> {
    return this.httpClient.post<Category>(this.API, category);
  }

  getById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.API}/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Product> {
    return this.httpClient.put<Category>(`${this.API}/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(`${this.API}/${id}`);
  }
}
