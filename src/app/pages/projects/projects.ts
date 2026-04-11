import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  listaProyectos = [
    {
      id: 'juego-pacman',
      titulo: 'Juego Clon Pac-Man',
      descripcion: 'Proyecto de Desarrollo Web I, desarrollo de un clon del videojuego Pac-Man.',
      tecnologias: ['JavaScript', 'HTML5 Canvas', 'CSS3']
    },
    {
      id: 'reproductor-musica',
      titulo: 'Reproductor de Música',
      descripcion: 'Proyecto de Desarrollo Web I, reproductor de música web',
      tecnologias: ['JavaScript', 'DOM Manipulation']
    },
    {
      id: 'visualizador-tiempo',
      titulo: 'Visualizador del Tiempo',
      descripcion: 'Proyecto de Manejo de Frameworks, visualizador de tiempo',
      tecnologias: ['Angular', 'TypeScript']
    },
    {
      id: 'sistema-academia',
      titulo: 'Sistema para academia',
      descripcion: 'Proyecto de Programación Visual inspirado en EDUCA',
      tecnologias: ['UML', 'C#', 'Figma', 'Arquitectura de Software','NPGSQL']
    }
  ];
}