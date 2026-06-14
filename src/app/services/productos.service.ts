import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Taladro',
      precio: 320000,
      categoria: 'Herramientas',
      imagen: 'assets/img/taladro.png',
    },
    {
      id: 2,
      nombre: 'Pulidora',
      precio: 410000,
      categoria: 'Herramientas',
      imagen: 'assets/img/pulidora.png',
    },
    {
      id: 3,
      nombre: 'Martillo',
      precio: 32000,
      categoria: 'Herramientas',
      imagen: 'assets/img/martillo.png',
    },
    {
      id: 4,
      nombre: 'Nivel',
      precio: 27000,
      categoria: 'Herramientas',
      imagen: 'assets/img/nivel.png',
    },
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerPorId(id: number): Producto | undefined {
    return this.productos.find((p) => p.id === id);
  }

  obtenerPorCategoria(categoria: string): Producto[] {
    return this.productos.filter((p) => p.categoria === categoria);
  }
}
