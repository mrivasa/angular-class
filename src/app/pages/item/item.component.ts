import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDescription } from '../../interfaces/product-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productDescription: ProductDescription;
  id: string;

  constructor( private route: ActivatedRoute, public productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.productService.getProduct(params['id'])
        .subscribe((data: ProductDescription) => {
          this.id = params['id'];
          this.productDescription = data;
          console.log(data);
        })
    })
  }

}
