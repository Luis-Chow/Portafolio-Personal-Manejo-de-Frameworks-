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
      titulo: 'Juego clon de Pac-Man',
      descripcion: 'Un clon del videojuego clásico recreado con JavaScript. Incluye mecánicas de enemigos, power-ups, efectos de sonido y un sistema de high score persistente guardado en el Local Storage del navegador. Para la materia Desarrollo Web I',
      imagenes: [
        '/assets/pacman1.jpg', 
        '/assets/pacman2.jpg',
        '/assets/pacman3.jpg'
      ],
      github: 'https://github.com/Luis-Chow/Clon-Pacman-Web-I'
    },

    'reproductor-musica': {
      titulo: 'Reproductor de Música',
      descripcion: 'Aplicación web construida para reproducir audio con controles personalizados, manipulando el DOM para actualizar la barra de progreso y el estado de reproducción.',
      imagenes: [
        ''
      ],
      github: 'https://github.com/Luis-Chow'
    },

    'visualizador-tiempo': {
      titulo: 'Visualizador del Tiempo en Angular',
      descripcion: 'Mi primera aplicación estructurada con el framework Angular, diseñada para visualizar datos temporales utilizando la arquitectura basada en componentes del framework. Para la materia Manejo de Frameworks.',
      imagenes: [
        ''
      ],
      github: 'https://github.com/Luis-Chow/Visualizador-del-Tiempo-con-Angular'
    },

    'sistema-academia': {
      titulo: 'Sistema para Academia',
      descripcion: 'Diseño y desarrollo de una aplicación de escritorio hecha con C# para recrear un sistema para Academias inspirado en EDUCA. Para la materia de Programación Visual',
      imagenes: [
        '/assets/SA0.jpg',
        '/assets/SA1.jpg',
        '/assets/SA2.jpg',
        '/assets/SA3.jpg',
        '/assets/SA4.jpg',
        '/assets/SA5.jpg',
        '/assets/SA6.jpg',
        '/assets/SA7.jpg',
        '/assets/SA8.jpg',
        '/assets/SA9.jpg',
        '/assets/SA10.jpg',
        '/assets/SA11.jpg'
      ],
      github: 'https://github.com/Luis-Chow/SistemaAcademia-Visual'
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