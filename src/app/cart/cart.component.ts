import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customData): void {

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn("你的訂單已經送出...", customData);
  }

}
