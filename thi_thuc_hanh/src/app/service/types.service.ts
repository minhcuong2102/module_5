import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeBds} from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  private API = 'http://localhost:3000/types';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<TypeBds[]> {
    return this.httpClient.get<TypeBds[]>(this.API);
  }

  save(product: TypeBds): Observable<TypeBds> {
    return this.httpClient.post<TypeBds>(this.API, product);
  }

  getById(id: number): Observable<TypeBds> {
    return this.httpClient.get<TypeBds>(`${this.API}/${id}`);
  }

  update(id: number, product: TypeBds): Observable<TypeBds> {
    return this.httpClient.put<TypeBds>(`${this.API}/${id}`, product);
  }

  delete(id: number): Observable<TypeBds> {
    return this.httpClient.delete<TypeBds>(`${this.API}/${id}`);
  }

  // search(name: string, idType: string): Observable<TypeBds[]> {
  //   let url = this.API + '?name_like=' + name;
  //   if (idType) {
  //     url += '&category.id=' + idType;
  //   }
  //   return this.httpClient.get<TypeBds[]>(url);
  // }
}
