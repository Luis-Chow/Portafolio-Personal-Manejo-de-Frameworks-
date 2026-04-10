import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private getUsuariosRegistrados(): any[] {
    const usuarios = localStorage.getItem('db_usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
  }

  // Registra un usuario nuevo si no existe
  registrar(usuario: string, contrasena: string): boolean {
    const usuarios = this.getUsuariosRegistrados();
    
    if (usuarios.find(u => u.usuario === usuario)) {
      return false;
    }

    usuarios.push({ usuario, contrasena });
    localStorage.setItem('db_usuarios', JSON.stringify(usuarios));
    
    localStorage.setItem('sesion_iniciada', 'true');
    return true;
  }

  iniciarSesion(usuario: string, contrasena: string): boolean {
    const usuarios = this.getUsuariosRegistrados();
    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);
    
    if (usuarioValido) {
      localStorage.setItem('sesion_iniciada', 'true');
      return true;
    }
    return false;
  }

  estaLogueado(): boolean {
    return localStorage.getItem('sesion_iniciada') === 'true';
  }

  cerrarSesion() {
    localStorage.removeItem('sesion_iniciada');
  }
}