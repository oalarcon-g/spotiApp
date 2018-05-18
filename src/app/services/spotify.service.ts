import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe } from "rxjs";
import { map, takeUntil, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public artistas: any;
  public urlBaseSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQCi4aqnP7jkaNyzDyB6vqWbTLY2ofZGpq0VMkcQogqvnRoavSZpx5q54NNPieVxg4BKC_cjSPvHqIGGF9M';

  constructor(public http: HttpClient) {

    console.log("Servicio spotify Listo!!");

  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token,
    });
    return headers;
  }

  getTop(id:string) {
    let url = `${this.urlBaseSpotify}artists/${id}/top-tracks?country=ES`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getArtist(id: string) {
    let url = `${this.urlBaseSpotify}artists/${id}`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getArtistas(query: string) {
    let url = `${this.urlBaseSpotify}search?query=${query}&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers }).pipe(
      map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      })
    );
  }
}
