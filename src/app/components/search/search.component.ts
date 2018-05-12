import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  query:string = '';

  constructor(public _spotify:SpotifyService) { 

  }

  ngOnInit() {
  }

  searchArtist(){
    if (this.query.length == 0) {
      return;
    }
    this._spotify.getArtistas(this.query).subscribe(artistas => {
      console.log(artistas);
    });
  }
}
