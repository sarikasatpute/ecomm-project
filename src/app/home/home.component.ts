import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {
  constructor(private productService: ProductService){}
  popularProducts: undefined | product[];


  ngOnInit(){
    this.popular3Products();

  }
  popular3Products(){
    this.productService.popularProducts().subscribe((data)=>{
    console.log(data);
    this.popularProducts = data;
    })

  }
}
