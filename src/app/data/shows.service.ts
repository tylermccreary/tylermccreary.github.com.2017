import { Injectable } from '@angular/core';
import { Show } from './show';
import { SHOWS } from './shows.data';
@Injectable()
export class ShowService {
  getShows(): Promise<Show[]> {
    return Promise.resolve(SHOWS);
  }
}
