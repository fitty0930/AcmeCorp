import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Acme } from './acme-products/Acme';

// maneja la logica de mi mail-order catalog
@Injectable({
  providedIn: 'root'
})
export class MailOrderService {

  private _orderList: Acme[] = [];
  orderList: BehaviorSubject<Acme[]> = new BehaviorSubject([]);

  constructor() { }


  addToMailOrder(product: Acme) {
    let item: Acme = this._orderList.find((v1) => (v1.name == product.name))
    if (!item) {
      this._orderList.push({ ...product })
    } else {
      item.quantity += product.quantity;
    }
    console.log(this._orderList);
    this.orderList.next(this._orderList);
  }


}
