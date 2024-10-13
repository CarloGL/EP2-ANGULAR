import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nombreNegocio = 'InnovaTech';
  descripcion = 'Transformamos lo desechado en tesoros, dando una segunda vida a objetos y reduciendo el impacto ambiental.';
  slogan = 'Renovando el presente, preservando el futuro';
  mision = 'En EInnovaTech, nos dedicamos a disminuir la cantidad de objetos desechados prematuramente. Creemos firmemente que muchos artículos considerados "inútiles" tienen el potencial de ser valiosos para otras personas. Nuestra misión es crear un puente entre aquellos que desean deshacerse de objetos y quienes pueden darles un nuevo propósito. A través de nuestro trabajo, no solo ayudamos a reducir el desperdicio, sino que también fomentamos una mentalidad de consumo más consciente y sostenible en nuestra comunidad.';
}