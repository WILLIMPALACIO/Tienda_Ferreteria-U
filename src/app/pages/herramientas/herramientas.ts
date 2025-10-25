import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-herramientas',
  imports: [],
  templateUrl: './herramientas.html',
  styleUrl: './herramientas.css'
})
export class Herramientas {
  productos = [
  {
    id: 1,
    nombre: 'Taladro',
    precio: 320000,
    imagen: 'assets/img/taladro.png',
  },
  {
    id: 2,
    nombre: 'Pulidora',
    precio: 410000,
    imagen: 'assets/img/pulidora.png',
  },
  {
    id: 3,
    nombre: 'Martillo',
    precio: 32000,
    imagen: 'assets/img/martillo.png',
  },
  {
    id: 4,
    nombre: 'Nivel',
    precio: 27000,
    imagen: 'assets/img/nivel.png',
  },
  {
    id: 5,
    nombre: 'Martillo',
    precio: 32000,
    imagen: 'assets/img/martillo.png',
  },
  {
    id: 6,
    nombre: 'Pulidora',
    precio: 410000,
    imagen: 'assets/img/pulidora.png',
  },
   {
    id: 7,
    nombre: 'Taladro',
    precio: 320000,
    imagen: 'assets/img/taladro.png',
  },

  ];

   constructor(private router: Router) {}

  navigation(id: number) {
    this.router.navigate(['/detalles', id]);
  }
}
