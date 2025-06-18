import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaylistListComponent } from './components/playlist-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlaylistListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'prueba-tecnica-reproductor-front';
}
