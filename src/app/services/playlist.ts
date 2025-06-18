import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:8080/playlists';
  
  private authHeaders = new HttpHeaders({
    Authorization: 'Basic ' + btoa('admin:admin123'),
    'Content-Type': 'application/json'
  });

  getAll(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.baseUrl, { headers: this.authHeaders });
  }

  getByName(name: string): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.baseUrl}/${name}`, { headers: this.authHeaders });
  }

  create(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(this.baseUrl, playlist, { headers: this.authHeaders });
  }

  delete(name: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${name}`, { headers: this.authHeaders });
  }
}
