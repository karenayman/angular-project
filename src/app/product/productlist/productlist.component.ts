import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
productArray!: Product[] 


@Output()
itemAddedFromProductListComp: EventEmitter<Product> = new EventEmitter<Product>();
// productService = new ProductService();

  constructor(private productService:ProductService , private authService:AuthService ) {}

  ngOnInit(): void {
this.getAllProducts();
    // this.productArray=this.productService.getAllProducts(); // hena bgyb el data mn el backend
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{this.productArray=res.product},
      (err)=> {console.log(err);
      },
      ()=>{}
    );
    const user = {
      email: 'teesthamaada@hamada.com',
      password: '12345678',
    }
    this.authService.login(user).subscribe(
      (res)=>{
        localStorage.setItem('token', res.token)
      }
    )

  }
  //ast2bel el $event
  onItemAdded(product:Product){
    console.log(product);
    
    this.itemAddedFromProductListComp.emit(product) 
    
  }
}
