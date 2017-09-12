import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../../../shared/services/catagory.service';
import { ProductService } from '../../../shared/services/product.service';
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
  id;

  constructor(
    private route: ActivatedRoute,
    private catagoryService: CatagoryService,
    private productService: ProductService,
    private router: Router) {
    this.catagories$ = catagoryService.getAll();
    
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p=> this.product = p);
  }
  
  save(product) {
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if(!confirm('Are you sure you want to delete this product?')) return ;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
