import { Component } from '@angular/core';
 import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Punto2Component {
  productos = [
    { nombre: 'Notebook Asus 13L', descripcion: 'Disco 40GB, 15 pulgadas', img: '/notebook13l.jpg', precio: 45.5 },
    { nombre: 'Monitor LG 14"', descripcion: 'Texto descriptivo producto 02', img: '/producto02.jpg', precio: 99 },
    { nombre: 'Teclado Gamer RGB', descripcion: 'Teclado mecánico retroiluminado', img: '/teclado.jpg', precio: 35.99 }
  ];

  carrito: any[] = [];
  total = 0;

  agregarAlCarrito(producto: any) {
    this.carrito = [producto]; // Solo permite un producto en el carrito
    this.total = producto.precio;
  }

  finalizarCompra() {
    if (this.carrito.length > 0) {
      alert(`Compra finalizada: ${this.carrito[0].nombre} por $${this.total}`);
      this.carrito = [];
      this.total = 0;
    } else {
      alert('El carrito está vacío.');
    }
  }
}
