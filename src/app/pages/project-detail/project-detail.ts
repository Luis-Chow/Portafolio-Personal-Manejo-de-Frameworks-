import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink], // Necesarios para el bucle y los enlaces
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class Projects {
  // Lista de tus proyectos
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
      id: 'sistema-veterinaria',
      titulo: 'Sistema para Veterinaria',
      descripcion: 'Diseño de arquitectura de software para la gestión y registro de clientes en una clínica veterinaria (Diagramas de secuencia y componentes).',
      tecnologias: ['UML', 'Arquitectura de Software']
    }
  ];
}