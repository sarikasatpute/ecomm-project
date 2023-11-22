import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent {
  productData: undefined | product;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product: ProductService,
    private router : Router) {}
  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');

    productId &&
      this.product.getProductById(productId).subscribe((data) => {
        console.log(data);
        this.productData = data;
      });
  }

  submit(data: product): void {
    console.log(data, 'update data');
    if(this.productData){
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has Updated';
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
      this.router.navigate(['/seller-home']);
    }, 3000);
    
  }
}
