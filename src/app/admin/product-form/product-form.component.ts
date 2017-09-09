import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../../catagory.service';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  catagories$;
  constructor(
    private catagoryService: CatagoryService,
    private productService: ProductService,
    private router: Router) {
    this.catagories$ = catagoryService.getCategories();
  }
  
  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
