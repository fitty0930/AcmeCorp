import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acme-products',
  templateUrl: './acme-products.component.html',
  styleUrls: ['./acme-products.component.scss']
})
export class AcmeProductsComponent implements OnInit {

  boomerang = {
    "nombre": "Auténtico boomerang con garantía de retornar",
    "precio": 1500,
    "stock": 10,
    "image": "assets/img/boomerang.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
