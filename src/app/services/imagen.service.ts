import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private imagenes = [
    { id: 1, titulo: 'Innovación Tecnológica', descripcion: 'Nuestro equipo trabajando en las últimas tecnologías', url: 'assets/images/gallery/IMG1.jpg' },
    { id: 2, titulo: 'Soluciones Empresariales', descripcion: 'Implementando soluciones para nuestros clientes', url: 'assets/images/gallery/IMG2.jpg' },
    { id: 3, titulo: 'Desarrollo de Software', descripcion: 'Creando software de alta calidad', url: 'assets/images/gallery/IMG3.jpeg' },
    // Añade más imágenes según sea necesario
  ];

  getImagenes() {
    return this.imagenes;
  }

  getImagen(id: number) {
    return this.imagenes.find(img => img.id === id);
  }
}