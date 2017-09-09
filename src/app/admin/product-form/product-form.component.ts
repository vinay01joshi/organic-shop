import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../../catagory.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  catagories$;
  constructor(catagoryService: CatagoryService,private productService: ProductService) {
     this.catagories$ = catagoryService.getCategories();
  }
  
  save(product) {
    this.productService.create(product);
  }

  ngOnInit() {
  }

}
