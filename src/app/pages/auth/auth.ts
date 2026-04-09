import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleModo() {
    this.esRegistro = !this.esRegistro;
    this.authForm.reset();
  }

  onSubmit() {
    if (this.authForm.valid) {
      console.log('Datos enviados:', this.authForm.value);
      alert(this.esRegistro ? '¡Registro exitoso!' : '¡Inicio de sesión exitoso!');
    }
  }
}