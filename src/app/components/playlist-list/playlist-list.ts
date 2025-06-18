import { Component, inject, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist';
import { Playlist } from '../../models/playlist.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playlist-list',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './playlist-list.html',
})
export class PlaylistListComponent implements OnInit {
  private playlistsService = inject(PlaylistService);

  busqueda: string = '';
  playlists: Playlist[] = [];

  buscarPlaylist() {
    const name = this.busqueda.trim();

    if (name) {
      this.playlistsService.getByName(name).subscribe({
        next: (res) => {
          this.playlists = [res];
        },
        error: () => {
          this.playlists = [];
        },
      });
    } else {
      this.cargarPlaylists();
    }
  }

  cargarPlaylists() {
    this.playlistsService.getAll().subscribe({
      next: (res) => {
        this.playlists = res;
      },
    });
  }

  confirmarEliminacion(nombre: string) {
    const confirmado = confirm(
      `¿Estás seguro de que deseas eliminar la lista "${nombre}"?`
    );
    if (confirmado) {
      this.playlistsService.delete(nombre).subscribe({
        next: () => {
          this.playlists = this.playlists.filter((p) => p.nombre !== nombre);
        },
        error: (err) => {
          alert(
            'Error al eliminar la lista: ' +
              (err.error?.message || 'Error desconocido')
          );
        },
      });
    }
  }

  ngOnInit() {
    this.cargarPlaylists();
  }
}
