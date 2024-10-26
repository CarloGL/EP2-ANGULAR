import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nombreNegocio = 'Runway 7';
  
  // Contenido para las cajas superiores
  leftBoxTitle = 'Nueva Colección';
  leftBoxButtonText = 'Explorar';
  
  rightBoxTitle = 'Edición Limitada';
  rightBoxButtonText = 'Descubrir';

  // Contenido para las nuevas cajas inferiores
  bottomLeftBoxTitle = 'Accesorios';
  bottomLeftBoxButtonText = 'Ver Más';

  bottomRightBoxTitle = 'Colaboraciones';
  bottomRightBoxButtonText = 'Explorar';

  constructor(private router: Router) {}

  onLeftButtonClick() {
    this.router.navigate(['https://runway7fashion.com/nyfw-designers/']);
  }

  onRightButtonClick() {
    this.router.navigate(['https://runway7fashion.com/sponsors/']);
  }

  onBottomLeftButtonClick() {
    this.router.navigate(['https://runway7fashion.com/nyfw-tickets-types/']);
  }

  onBottomRightButtonClick() {
    this.router.navigate(['https://runway7fashion.com/shop-nyfw2025/']);
  }
}