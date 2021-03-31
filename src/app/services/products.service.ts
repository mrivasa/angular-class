import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { ProductDescription } from '../interfaces/product-description.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    loading = true;
    products: Product[] = [];
    filteredProducts: Product[] = [];

    constructor( private http: HttpClient ) { 
      this.loadProducts();
    }

    private loadProducts(){

      return new Promise<void> ( (resolve, reject ) => {
        this.http.get('https://angular-class-851c2-default-rtdb.firebaseio.com/products_idx.json')
        .subscribe((resp: any) => {
          this.products = resp;
          this.loading = false;
          resolve();
        });
      });
      
    }

    getProduct(id: string){
      return this.http.get<ProductDescription>(`https://angular-class-851c2-default-rtdb.firebaseio.com/products/${ id }.json`);
    }

    searchProduct(criteria: string){

      if(this.products.length === 0){
        this.loadProducts().then( () => {
          this.filterProducts(criteria);
        })
      } else {
        this.filterProducts(criteria);
      }

      console.log(this.filteredProducts);
    }

    private filterProducts( criteria: string){
      this.filteredProducts = [];
      this.products.forEach(product => {
        if(product.categoria.indexOf(criteria) >= 0 || product.titulo.indexOf(criteria) >= 0){
          this.filteredProducts.push(product);
        }
      })
    }

}
