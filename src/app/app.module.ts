import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { AuthComponent } from './sections/auth/auth.component';
import { BettingComponent } from './sections/betting/betting.component';
import { GamesComponent } from './sections/games/games.component';
import { PlayerComponent } from './sections/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    ContainerComponent,
    BettingComponent,
    SidebarComponent,
    GamesComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
