import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryBds} from '../model/categoryBds';
import {Bds} from '../model/bds';

@Injectable({
  providedIn: 'root'
})
export class BdsService {

  private API = 'http://localhost:3000/bds';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Bds[]> {
    return this.httpClient.get<Bds[]>(this.API);
  }

  save(product: Bds): Observable<Bds> {
    return this.httpClient.post<Bds>(this.API, product);
  }

  getById(id: number): Observable<Bds> {
    return this.httpClient.get<Bds>(`${this.API}/${id}`);
  }

  update(id: number, product: Bds): Observable<Bds> {
    return this.httpClient.put<Bds>(`${this.API}/${id}`, product);
  }

  delete(id: number): Observable<Bds> {
    return this.httpClient.delete<Bds>(`${this.API}/${id}`);
  }

  search(area: string, price: string, direction: string): Observable<Bds[]> {
    let url = this.API + '?name_like';
    if (area) {
      url += '&area_gte=' + area;
    }
    if (price) {
      url += '&price_gte=' + price;
    }
    if (direction) {
      url += '&direction=' + direction;
    }
    console.log(url);
    return this.httpClient.get<CategoryBds[]>(url);
  }
}
