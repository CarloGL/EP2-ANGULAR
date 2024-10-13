import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { DetalleImagenComponent } from './detalle-imagen/detalle-imagen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalle-imagen/:id', component: DetalleImagenComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }