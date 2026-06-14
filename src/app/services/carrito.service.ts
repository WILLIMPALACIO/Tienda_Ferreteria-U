import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private readonly _carrito = signal<Producto[]>([]);

  readonly carrito = this._carrito.asReadonly();
  readonly cantidad = computed(() => this._carrito().length);

  agregar(producto: Producto): void {
    this._carrito.update((items) => [...items, producto]);
  }

  obtenerCarrito(): Producto[] {
    return this._carrito();
  }

  total(): number {
    return this._carrito().reduce((acc, p) => acc + p.precio, 0);
  }

  eliminar(index: number): void {
    this._carrito.update((items) => items.filter((_, i) => i !== index));
  }

  vaciar(): void {
    this._carrito.set([]);
  }
}
