import { Component, Input, OnInit } from '@angular/core';
// import { count } from 'console';
import { Product } from '../_models/product.model';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  cartIsOpen=false;
  
 
  theAddedProduct : Product[] =[];
  product! : Product[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.theAddedProduct = this.productService.cartArray;
  }
  delete(product:Product) {
    this.theAddedProduct.splice(this.theAddedProduct.indexOf(product), 1);
  }
  
}
