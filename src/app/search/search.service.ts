import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUrl = 'http://localhost/angular-elements/data/search.json';

  constructor(private http: HttpClient) {  }

  getResults(): Observable<Product[]> {
    return this.http.get<Product[]>(this.searchUrl);
  }
}
