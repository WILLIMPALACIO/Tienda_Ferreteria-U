import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  constructor(public carritoService: CarritoService) {}

  eliminar(index: number): void {
    this.carritoService.eliminar(index);
  }

  vaciar(): void {
    this.carritoService.vaciar();
  }
}
