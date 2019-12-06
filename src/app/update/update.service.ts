import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private updateUrl = 'http://localhost/angular-elements/data/update.php';

  constructor(private http: HttpClient) {  }

  getValue(): Observable<string> {
    return this.http.get(this.updateUrl, { responseType: 'text' as 'text'});
  }

  updateValue(value: string): Observable<string> {
    return this.http.post<string>(this.updateUrl, value);
  }
}
