import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetallesService } from './detalles.service';

@Component({
  selector: 'app-detalles',
  imports: [CommonModule],
  templateUrl: './detalles.html',
  styleUrl: './detalles.css',
})
export class Detalles {
  product = {
    id: 1,
    nombre: 'Zapatillas Adidas Superstar',
    precio: 299000,
    descripcion: '',
    color: ['Rojo', 'Negro', 'Verde', 'Amarillo', 'Azul'],
    tallas: [32, 34, 36, 38, 40],

    imagen: [
      'assets/img/taladro.png',
    ],
  };
  //product: any = null;
  activeImage = 0;

  constructor(private activatedRoute: ActivatedRoute, public detalleService: DetallesService) {}

  ngOnInit() {
    const producto_id = this.activatedRoute.snapshot.params['id'];
    this.detalleService.loading = true;
    // this.detalleService.obtenerProducto(producto_id).subscribe((response: any) => {
    //   this.product = response;
    //   this.detalleService.loading = false;
    // });
    console.log('ruta: ');
  }
  oneAdd() {
    if (this.activeImage >= 0 && this.activeImage < this.product.imagen.length - 1) {
      this.activeImage++;
    }
  }

  removeOne() {
    if (this.activeImage > 0) {
      this.activeImage--;
    }
  }

  seeImagen(index: number) {
    this.activeImage = index;
  }
}
