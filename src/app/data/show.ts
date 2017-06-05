import { Artist } from './artist';

export class Show {
  id: number;
  title: string;
  artistIDs: number[];
  venue: string;
  location: {
    latitude: number;
    longitude: number
  }
  date: Date;
  address: string;
  city: string;
  stateProv: string;
  country: string;
  zip: number;
}
