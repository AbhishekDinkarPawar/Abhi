import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productArray : any [] = []
  constructor(){
    const localData = localStorage.getItem('products')
    if (localData != null)
    this.productArray = JSON.parse(localData)
  }
  calculateActualPrice (per :number , price:number){
    const actualAmount = Number(price)-(Number(price)*Number(per)/100)
    return actualAmount
  }
}
