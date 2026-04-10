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
      titulo: 'Juego Estilo Pac-Man',
      descripcion: 'Desarrollo de un videojuego interactivo con mecánicas clásicas, enemigos, power-ups y sistema de puntaje usando almacenamiento local.',
      tecnologias: ['JavaScript', 'HTML5 Canvas', 'CSS3']
    },
    {
      id: 'reproductor-musica',
      titulo: 'Reproductor de Música',
      descripcion: 'Aplicación web para reproducir pistas de audio con interfaz de controles personalizados y visualización de progreso.',
      tecnologias: ['JavaScript', 'DOM Manipulation']
    },
    {
      id: 'visualizador-tiempo',
      titulo: 'Visualizador del Tiempo',
      descripcion: 'Proyecto de visualización de datos temporales construido con una arquitectura moderna basada en componentes.',
      tecnologias: ['Angular', 'TypeScript']
    },
    {
      id: 'sistema-academia',
      titulo: 'Sistema para academia',
      descripcion: 'Proyecto de sistema de academia ',
      tecnologias: ['UML', 'Arquitectura de Software']
    }
  ];
}