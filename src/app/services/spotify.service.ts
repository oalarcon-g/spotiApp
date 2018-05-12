import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe } from "rxjs";
import { map, takeUntil, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public artistas:any;
  constructor(public http:HttpClient) {

    console.log("Servicio spotify Listo!!");

  }

  getArtistas(query:string) {
    let url = `https://api.spotify.com/v1/search?query=${query}&type=artist&offset=0&limit=20`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQDGNMrQdgygn6OcXQGRjZENLNUUCxtD0qq6THHLxauIBkGkjAYTMKXaA6UH8XPBE9NgdTlkHaKivOuZcKM'
    });
    return this.http.get(url, {headers}).pipe(
      map((resp:any )=>{
        this.artistas = resp.artists.items;
        return this.artistas;
      })
    );
  }
}
