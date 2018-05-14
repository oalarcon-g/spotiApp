import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe } from "rxjs";
import { map, takeUntil, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public artistas: any;
  public urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQCr-bWlQcJI9t9HTGO0PjvdL9EAv6dOEqsxkzlJcuq5-xKtbFYkwWpvO2dX9f7Q8KEnfVJuAPy37vm9hjA';

  constructor(public http: HttpClient) {

    console.log("Servicio spotify Listo!!");

  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token,
    });
    return headers;
  }

  getArtist(id: string) {
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getArtistas(query: string) {
    let url = `${this.urlSpotify}search?query=${query}&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers }).pipe(
      map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      })
    );
  }
}
