import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistListComponent } from './playlist-list';

describe('PlaylistList', () => {
  let component: PlaylistListComponent;
  let fixture: ComponentFixture<PlaylistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
