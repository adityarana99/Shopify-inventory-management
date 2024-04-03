import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/api/products'; // Update with your backend URL


  constructor(private http: HttpClient) { }

  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(productId: number): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(productId: number, product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<void>(url);
  }

}
