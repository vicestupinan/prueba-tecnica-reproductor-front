import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaylistService } from '../../services/playlist';
import { Router } from '@angular/router';
import { Playlist } from '../../models/playlist.model';
import { Song } from '../../models/playlist.model';

@Component({
  selector: 'app-playlist-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './playlist-form.html',
})
export class PlaylistFormComponent {
  private playlistService = inject(PlaylistService);
  private router = inject(Router);

  playlist: Playlist = {
    nombre: '',
    descripcion: '',
    canciones: [],
  };

  cancion: Song = {
    titulo: '',
    artista: '',
    album: '',
    anno: '',
    genero: '',
  };

  errorMessage = '';
  successMessage = '';

  agregarCancion() {
    if (!this.cancion.titulo.trim()) return;

    this.playlist.canciones?.push({ ...this.cancion });
    this.cancion = {
      titulo: '',
      artista: '',
      album: '',
      anno: '',
      genero: '',
    };
  }

  cancelar() {
    this.router.navigateByUrl('/');
  }

  onSubmit() {
    if (!this.playlist.nombre.trim()) {
      this.errorMessage = 'El nombre es obligatorio.';
      return;
    }

    this.playlistService.create(this.playlist).subscribe({
      next: () => {
        this.successMessage = 'Lista creada exitosamente.';
        this.errorMessage = '';
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        this.successMessage = '';
        this.errorMessage = err?.error?.message || 'Error al crear la lista.';
      },
    });
  }
}
