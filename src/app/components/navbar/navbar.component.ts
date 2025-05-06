import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // Marca el componente como standalone
  imports: [RouterModule], // Importa RouterModule para usar routerLink
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Cambiado a styleUrls (en plural)
})
export class NavbarComponent {

}
