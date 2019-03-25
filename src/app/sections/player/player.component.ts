import { Component, OnInit } from '@angular/core';
import { PlayerService, Player } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  players: Player[];

  constructor(private playerService: PlayerService ) { }

  ngOnInit() {
    this.refreshPlayers();
  }

  refreshPlayers(): void {
    this.playerService.getAllPlayers()
      .subscribe(players => this.players = players);
  }

}
