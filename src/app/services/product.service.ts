import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:product){
    console.log('addProduct');
    return this.http.post('http://localhost:3000/products',data);
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  deleteProduct(id:number){
    return this.http.delete<product[]>(`http://localhost:3000/products/${id}`);
  }
  getProductById(id:string){
return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(data:product){
    return this.http.put<product>(`http://localhost:3000/products/${data.id}`,data);

  }
}
