import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artista: any = {};

  topTracks: any = [];

  constructor(private activatedRoute: ActivatedRoute, public _spotify: SpotifyService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this._spotify.getArtist(params['id']).subscribe(artista => {
        console.log(artista);
        this.artista = artista;
      });
      this._spotify.getTop(params['id']).subscribe((tracks:any)=> {
        console.log(tracks);
        this.topTracks = tracks.tracks;
      });
    });
  }

}
