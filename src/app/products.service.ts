import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url);
  }
}
