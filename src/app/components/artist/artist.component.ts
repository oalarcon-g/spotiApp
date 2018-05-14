import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artista:any = {};

  constructor(private activatedRoute: ActivatedRoute, public _spotify: SpotifyService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
       this._spotify.getArtist(params['id']).subscribe(artista => {
         console.log(artista);
         this.artista = artista;
       }) });
  }

}
