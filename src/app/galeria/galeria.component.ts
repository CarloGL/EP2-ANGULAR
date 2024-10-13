import { Component, OnInit } from '@angular/core';
import { ImagenService } from '../services/imagen.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  imagenes: any[] = [];

  constructor(private imagenService: ImagenService) {}

  ngOnInit() {
    this.imagenes = this.imagenService.getImagenes();
  }
}