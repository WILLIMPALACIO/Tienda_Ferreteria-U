import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { CarritoService } from '../../services/carrito.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-herramientas',
  imports: [CurrencyPipe],
  templateUrl: './herramientas.html',
  styleUrl: './herramientas.css',
})
export class Herramientas {
  productos: Producto[] = [];

  constructor(
    private router: Router,
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {
    this.productos = this.productosService.obtenerPorCategoria('Herramientas');
  }

  navigation(id: number): void {
    this.router.navigate(['/detalles', id]);
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregar(producto);
    alert('Producto agregado');
  }
}
