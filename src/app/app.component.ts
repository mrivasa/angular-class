import { Component } from '@angular/core';
import { PageInfoService } from './services/page-info.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _pageInfo: PageInfoService, 
    public _productService: ProductsService){
    
  }
}
