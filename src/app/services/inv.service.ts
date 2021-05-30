import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personagem} from '../models/personagem';
import {Inventario} from '../models/personagem';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvService {

  private readonly API = 'https://corrupted-domain-default-rtdb.firebaseio.com/personagens/-Maz0C7WfA2RZYSmIZe7.json';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Personagem[]>(this.API);
  }

  edit(id: number, inventario: Inventario[]){
    return this.http.put(this.API +"/" + id, inventario).pipe(take(1));
  }
}
