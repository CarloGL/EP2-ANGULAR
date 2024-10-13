import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent {
  descripcion = 'InnovaTech Solutions es una empresa líder en el sector tecnológico, dedicada a proporcionar soluciones innovadoras que impulsan el crecimiento y la eficiencia de nuestros clientes.';
  mision = 'Nuestra misión es transformar el panorama empresarial a través de soluciones tecnológicas de vanguardia, permitiendo a nuestros clientes alcanzar su máximo potencial en la era digital.';
  vision = 'Aspiramos a ser reconocidos globalmente como el socio tecnológico preferido, liderando la innovación y estableciendo nuevos estándares en la industria.';
  valores = [
    'Innovación constante',
    'Excelencia en el servicio al cliente',
    'Integridad y transparencia',
    'Colaboración y trabajo en equipo',
    'Responsabilidad social y sostenibilidad'
  ];
}