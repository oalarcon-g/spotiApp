import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Routes
import { APP_ROUTING } from "./app.routes";

import { NophotoPipe } from './pipes/nophoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

//Services
import { SpotifyService } from "./services/spotify.service";
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistComponent,
    NophotoPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
