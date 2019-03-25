import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>( "https://localhost:44377/api/players" )
  }
}

export interface Player {
  id: number;
  name: string;
}
