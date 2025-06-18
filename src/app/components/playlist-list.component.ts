import { Component, inject, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist';
import { Playlist } from '../models/playlist.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist-list',
  imports: [CommonModule],
  templateUrl: './playlist-list.component.html'
})
export class PlaylistListComponent implements OnInit {
  private playlistsService = inject(PlaylistService);
  playlists: Playlist[] = [];

  ngOnInit(): void {
      this.playlistsService.getAll().subscribe({
        next: (data) => (this.playlists = data),
        error: (err) => console.log(err)
      });
  }
}
