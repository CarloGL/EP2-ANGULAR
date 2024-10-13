import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagenService } from '../services/imagen.service';

@Component({
  selector: 'app-detalle-imagen',
  templateUrl: './detalle-imagen.component.html',
  styleUrls: ['./detalle-imagen.component.scss']
})
export class DetalleImagenComponent implements OnInit {
  imagen: any;

  constructor(
    private route: ActivatedRoute,
    private imagenService: ImagenService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.imagen = this.imagenService.getImagen(Number(id));
    }
  }
}