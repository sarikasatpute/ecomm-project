import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
addProductMessage : string | undefined;
resetFields : boolean = false;
@ViewChild('addProduct') addProduct!: NgForm;
  constructor(private product:ProductService,
    private router : Router){}
  ngOnInit():void{
  }
submit(data:any){
this.product.addProduct(data).subscribe((result)=>{
  console.log(result,"success");
  if(result){
    this.addProductMessage = "product added successfully"
   this.addProduct.resetForm(); // Reset the form
  }
  setTimeout(() => {
    this.router.navigate(['/seller-home']);
    this.addProductMessage = undefined
  }, 3000);
});
  }
}
