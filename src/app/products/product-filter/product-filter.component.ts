import { Component, OnInit, Input } from '@angular/core';
import { CatagoryService } from '../../shared/services/catagory.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  cagatories$;  
  @Input('category') category;

  constructor( catagoryService: CatagoryService) { 
    this.cagatories$ = catagoryService.getAll(); 
  }

}
