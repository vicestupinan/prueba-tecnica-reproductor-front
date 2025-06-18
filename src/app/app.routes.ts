import { Routes } from '@angular/router';
import { PlaylistListComponent } from './components/playlist-list/playlist-list';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form';

export const routes: Routes = [
  { path: '', component: PlaylistListComponent },
  { path: 'crear', component: PlaylistFormComponent },
];
