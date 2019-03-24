import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './sections/auth/auth.component';
import { BettingComponent } from './sections/betting/betting.component';
import { GamesComponent } from './sections/games/games.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'games', component: GamesComponent },
  { path: 'betting', component: BettingComponent },

  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
