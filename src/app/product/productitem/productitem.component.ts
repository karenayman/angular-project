import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.scss']
})
export class ProductitemComponent implements OnInit {

@Input() //hygy mn el parent astna
  productItem! : Product; 

// @Output()
// itemAdded:EventEmitter<Product> = new EventEmitter<Product>();
// productService = new ProductService();
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  onAddedToCartPressed(){
    console.log('hamadaa');
    
    this.productService.itemAdded.emit(this.productItem);
    // this.productService.addItemToCard(this.productItem)
  }
}
