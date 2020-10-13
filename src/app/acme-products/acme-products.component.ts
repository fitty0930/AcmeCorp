import { Component, OnInit } from '@angular/core';
import { Acme } from './Acme';

@Component({
  selector: 'app-acme-products',
  templateUrl: './acme-products.component.html',
  styleUrls: ['./acme-products.component.scss']
})
export class AcmeProductsComponent implements OnInit {

  products : Acme[] = [{
    name: "Auténtico boomerang con garantía de retornar",
    price: 1500,
    stock: 10,
    image: 'assets/img/boomerang.jpg',
    clearance: false,
  },{
    name: "Pistola desintegradora A-1",
    price: 900,
    stock: 200,
    image: 'assets/img/desintegratingpistol.jpg',
    clearance: false,
  },
  {
    name: "Pildoras de terremoto",
    price: 10000,
    stock: 3,
    image: 'assets/img/earthquakepills.jpg',
    clearance: true,
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
