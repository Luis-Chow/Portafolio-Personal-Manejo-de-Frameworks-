import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogueado(): boolean {
    return localStorage.getItem('sesion_iniciada') === 'true';
  }

  iniciarSesion() {
    localStorage.setItem('sesion_iniciada', 'true');
  }

  cerrarSesion() {
    localStorage.removeItem('sesion_iniciada');
  }
}