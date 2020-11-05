import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Acme } from '../acme-products/Acme';
import { MailOrderService } from '../mail-order.service';

@Component({
  selector: 'app-mail-order',
  templateUrl: './mail-order.component.html',
  styleUrls: ['./mail-order.component.scss']
})
export class MailOrderComponent implements OnInit {

  orderList$: Observable<Acme[]>;
  constructor(private mailorder: MailOrderService) {
    this.orderList$ = mailorder.orderList.asObservable();
  }

  ngOnInit(): void {
  }

}
