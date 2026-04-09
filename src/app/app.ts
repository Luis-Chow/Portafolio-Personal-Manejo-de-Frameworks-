import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Ajusta estas rutas si tus archivos se generaron sin el ".component" al final
import { Navbar } from './shared/navbar/navbar'; 
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer], // ¡Añadimos Navbar y Footer aquí!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Portafolio-Personal-Manejo-de-Frameworks';
}