import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share(): void {
    window.alert("你分享了這項產品.");
  }

  onNotify(){
    window.alert("你分享了這項產品, by emit");
  }
}
