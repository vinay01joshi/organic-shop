import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CatagoryService } from '../catagory.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;
  cagatories$;

  constructor(productService: ProductService,catagoryService: CatagoryService) {
    this.products$ = productService.getAll();
    this.cagatories$ = catagoryService.getAll();
    console.log(this.cagatories$)
   }
}
