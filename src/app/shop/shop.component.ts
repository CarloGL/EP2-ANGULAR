import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  featuredTitle = '';
  featuredSubtitle = 'This is more than fashion—it’s an experience';
  featuredDescription = 'Dont miss the opportunity to add a unique touch to your collection buy now and make every look unforgettable.';
  buttonText = 'BUY NOW';
  buttonLink = 'https://runway7fashion.com/shop-nyfw2025/';
  backgroundImage = 'assets/images/featured-background.jpg'; // Asegúrate de tener esta imagen en tu proyecto
}