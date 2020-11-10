import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number;
  // hay que hacer 1 input por cada cosa que recibo

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>()

  @Output()
  breakPoint: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if (this.max > this.quantity) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.breakPoint.emit("ya no hay mas disponible");
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    } else {
      this.breakPoint.emit("no trabajamos con cantidades menores a 0");
    }
  }

  // funcion que impide que ingrese un caracter
  // ya no es necesaria
  onChangeQuantity(event): boolean {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.breakPoint.emit("Ingrese numeros")
      return false;
    }
    return true;

  }
}
