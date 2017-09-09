import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../../catagory.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  catagories$;
  product = {};

  constructor(
    private route: ActivatedRoute,
    private catagoryService: CatagoryService,
    private productService: ProductService,
    private router: Router) {
    this.catagories$ = catagoryService.getCategories();
    
    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.productService.get(id).take(1).subscribe(p=> this.product = p);
  }
  
  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
