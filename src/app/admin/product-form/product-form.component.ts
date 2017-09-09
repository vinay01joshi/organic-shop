import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../../catagory.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  catagories$;
  constructor(catagoryService: CatagoryService) {
     this.catagories$ = catagoryService.getCategories();
  }

  ngOnInit() {
  }

}
