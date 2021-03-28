import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    loading = true;
    products: Product[] = []

    constructor( private http: HttpClient ) { 
      this.loadProducts();
    }

    private loadProducts(){
      this.http.get('https://angular-class-851c2-default-rtdb.firebaseio.com/products_idx.json')
        .subscribe((resp: any) => {
          this.products = resp;
          this.loading = false;
        });
    }

}
