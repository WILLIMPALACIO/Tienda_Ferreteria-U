import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { CarritoService } from '../../services/carrito.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-detalles',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './detalles.html',
  styleUrl: './detalles.css',
})
export class Detalles implements OnInit {
  producto: Producto | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.producto = this.productosService.obtenerPorId(id);
  }

  agregarAlCarrito(): void {
    if (!this.producto) {
      return;
    }
    this.carritoService.agregar(this.producto);
    alert('Producto agregado');
  }
}
