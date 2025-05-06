import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css'],
  standalone: true // Marca el componente como standalone
})
export class Punto1Component {
  noticias = [
    {
      titulo: 'Tecnología: IA en 2025',
      noticia: 'La inteligencia artificial transforma el mundo a pasos agigantados.',
      img: 'noticia01.jpg'
    },
    {
      titulo: 'Deportes: Triunfo histórico',
      noticia: 'Argentina vence a Brasil en la final del mundial.',
      img: 'noticia02.jpg'
    },
    {
      titulo: 'Ciencia: Agua en Marte',
      noticia: 'Nuevas evidencias sugieren la existencia de agua subterránea en Marte.',
      img: 'noticia03.jpg'
    }
  ];

  actual = 0;

  siguiente() {
    this.actual = (this.actual + 1) % this.noticias.length;
  }

  anterior() {
    this.actual = (this.actual - 1 + this.noticias.length) % this.noticias.length;
  }
}
