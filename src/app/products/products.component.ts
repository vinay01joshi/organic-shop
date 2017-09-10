import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CatagoryService } from '../catagory.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filterdProdcuts: Product[] = [];
  cagatories$;
  category: string;

  constructor(
      route: ActivatedRoute,
      productService: ProductService,
      catagoryService: CatagoryService) {    
      productService.getAll().subscribe(products => this.products = products);

      this.cagatories$ = catagoryService.getAll();
    
      route.queryParamMap.subscribe(params => {
        this.category = params.get('catagory');

        this.filterdProdcuts = (this.category) ?
          this.products.filter(p=> p.category === this.category) :
          this.products;
      });
   }
}
