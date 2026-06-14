import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductosService } from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  productos: any[] = [];
  textoBusqueda = '';

  constructor(
    private router: Router,
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {
    this.productos =
      this.productosService.obtenerProductos();
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregar(producto);
    alert('Producto agregado al carrito');
  }

  navigation(id: number) {
    this.router.navigate(['/detalles', id]);
  }

  buscar() {

    const productos =
      this.productosService.obtenerProductos();

    this.productos = productos.filter((p: any) =>
      p.nombre
        .toLowerCase()
        .includes(
          this.textoBusqueda.toLowerCase()
        )
    );
  }
}