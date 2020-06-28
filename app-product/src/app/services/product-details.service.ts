import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  getProductDetails(productID): Observable<any> {
    return this.http
      .get('../../assets/details.json')
      .pipe(
        map(
          (response: any) =>
            response.filter((product) => product.id === Number(productID))[0]
        )
      );
  }
}
