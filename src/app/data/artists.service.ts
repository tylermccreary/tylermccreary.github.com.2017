import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { ARTISTS } from './artists.data';
@Injectable()
export class ArtistService {
  getArtists(): Promise<Artist[]> {
    return Promise.resolve(ARTISTS);
  }
}
