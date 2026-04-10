import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  authForm: FormGroup;
  esRegistro = false;
  mensajeError: string | null = null; // Variable para mostrar errores de credenciales

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService
  ) {
    this.authForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.pattern(/^\S+$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/.*\S.*/)]]
    });
  }

  toggleModo() {
    this.esRegistro = !this.esRegistro;
    this.authForm.reset();
    this.mensajeError = null;
  }

  onSubmit() {
    if (this.authForm.valid) {
      this.mensajeError = null;
      const { usuario, password } = this.authForm.value;

      if (this.esRegistro) {
        const exito = this.authService.registrar(usuario, password);
        if (exito) {
          this.router.navigate(['/proyectos']);
        } else {
          this.mensajeError = 'Este usuario ya está en uso. Por favor, elige otro.';
        }
      } else {
        const exito = this.authService.iniciarSesion(usuario, password);
        if (exito) {
          this.router.navigate(['/proyectos']);
        } else {
          this.mensajeError = 'Usuario o contraseña incorrectos. Verifica si la cuenta existe.';
        }
      }
    }
  }
}