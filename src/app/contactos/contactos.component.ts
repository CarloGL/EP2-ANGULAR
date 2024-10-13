import { Component } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent {
  email = 'carlos.bgl0801@gmail.com';
  telefono = '+51 983 490 993';
  direccion = 'Centro Empresarial Jose Pardo';
  horario = 'Lunes a Viernes: 9:00 AM - 6:00 PM';
}