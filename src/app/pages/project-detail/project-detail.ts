import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MatTabsModule, MatExpansionModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail implements OnInit {
  proyectoId: string | null = '';
  proyectoActual: any;
  imagenActualIndex = 0;

  dbProyectos: any = {
    'juego-pacman': {
      titulo: 'Juego Estilo Pac-Man',
      descripcion: 'Un videojuego clásico recreado con JavaScript. Incluye mecánicas de enemigos, power-ups, efectos de sonido y un sistema de high score persistente guardado en el Local Storage del navegador.',
      imagenes: ['https://placehold.co/800x400/222/4CAF50?text=Pantalla+de+Inicio', 'https://placehold.co/800x400/222/4CAF50?text=Gameplay+y+Enemigos', 'https://placehold.co/800x400/222/4CAF50?text=High+Score'],
      snippets: [
        { titulo: 'Lógica de Comportamiento de Enemigos', codigo: 'function updateGhostPosition(ghost) {\n  // Lógica de persecución al jugador\n}' },
        { titulo: 'Guardar High Score', codigo: 'localStorage.setItem("pacman_highscore", score);' }
      ]
    },
    'reproductor-musica': {
      titulo: 'Reproductor de Música',
      descripcion: 'Aplicación web construida para reproducir audio con controles personalizados, manipulando el DOM para actualizar la barra de progreso y el estado de reproducción.',
      imagenes: ['https://placehold.co/800x400/222/2196F3?text=Interfaz+del+Reproductor', 'https://placehold.co/800x400/222/2196F3?text=Lista+de+Canciones'],
      snippets: [
        { titulo: 'Control de Reproducción y Progreso', codigo: 'audioElement.play();\nupdateProgressBar();' }
      ]
    },
    'visualizador-tiempo': {
      titulo: 'Visualizador del Tiempo en Angular',
      descripcion: 'Mi primera aplicación estructurada con el framework Angular, diseñada para visualizar datos temporales utilizando la arquitectura basada en componentes del framework.',
      imagenes: ['https://placehold.co/800x400/222/f44336?text=Dashboard+Principal', 'https://placehold.co/800x400/222/f44336?text=Filtros+de+Tiempo'],
      snippets: [
        { titulo: 'Estructura del Componente', codigo: '@Component({\n  selector: "app-time-visualizer",\n  ...\n})' }
      ]
    },
    'sistema-veterinaria': {
      titulo: 'Sistema para Veterinaria',
      descripcion: 'Diseño de la arquitectura de software para una clínica veterinaria. Incluye diagramas de secuencia y de componentes que detallan cómo el recepcionista registra a los clientes y mascotas.',
      imagenes: ['https://placehold.co/800x400/222/FFC107?text=Diagrama+de+Secuencia', 'https://placehold.co/800x400/222/FFC107?text=Diagrama+de+Componentes'],
      snippets: [
        { titulo: 'Modelo de Datos: Cliente', codigo: 'class Cliente {\n  id: string;\n  nombre: string;\n  mascotas: Mascota[];\n}' }
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.proyectoId = this.route.snapshot.paramMap.get('id');
    if (this.proyectoId) {
      this.proyectoActual = this.dbProyectos[this.proyectoId];
    }
  }

  siguienteImagen() {
    if (this.imagenActualIndex < this.proyectoActual.imagenes.length - 1) {
      this.imagenActualIndex++;
    } else {
      this.imagenActualIndex = 0;
    }
  }

  anteriorImagen() {
    if (this.imagenActualIndex > 0) {
      this.imagenActualIndex--;
    } else {
      this.imagenActualIndex = this.proyectoActual.imagenes.length - 1;
    }
  }
}