import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css'],
  standalone: true,
  imports: [CommonModule] // Asegúrate de incluir CommonModule aquí
})
export class Punto3Component {

  palabras: string[] = ['RIVER', 'BOCA', 'MESSI', 'MARADONA', 'BOCHINI', 'CRESPO', 'GALLARDO', 'MASTANTUONO', 'SABELLA', 'GAGO'];
  palabraSeleccionada: string = '';
  letrasAdivinadas: string[] = [];
  intentos: number = 5;
  maxIntentos: number = 5;
  abecedario: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  juegoTerminado: boolean = false;
  gano: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.nuevaPartida();
  }

  nuevaPartida() {
    const indice = Math.floor(Math.random() * this.palabras.length);
    this.palabraSeleccionada = this.palabras[indice];
    this.letrasAdivinadas = [];
    this.intentos = this.maxIntentos;
    this.juegoTerminado = false;
    this.gano = false;
  }

  letraPresionada(letra: string) {
    if (this.juegoTerminado || this.letrasAdivinadas.includes(letra)) return;

    if (this.palabraSeleccionada.includes(letra)) {
      this.letrasAdivinadas.push(letra);
      if (this.palabraSeleccionada.split('').every(l => this.letrasAdivinadas.includes(l))) {
        this.gano = true;
        this.juegoTerminado = true;
      }
    } else {
      this.intentos--;
      if (this.intentos === 0) {
        this.juegoTerminado = true;
      }
    }
  }

  mostrarLetra(letra: string): boolean {
    return this.letrasAdivinadas.includes(letra);
  }

  obtenerImagen(): string {
    return `/ahorcado${this.maxIntentos - this.intentos}.png`;
  }
}
