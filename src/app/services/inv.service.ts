import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personagem } from '../models/personagem';
import { Inventario } from '../models/personagem';
import { take } from 'rxjs/operators';
import { Campanha } from '../models/campanha';

@Injectable({
  providedIn: 'root'
})
export class InvService {

  private readonly API = 'https://corrupted-domain-default-rtdb.firebaseio.com/humblewood.json';
  alfabeto: string = "abcdefghijklmnopqrstuvwxyz ,.!;-/ABCDEFGHIJKLMONPQRSTUVWXYZáÁóÓíÍãôÃÔéÉ@#$%&*()+=|";
  chave: number = 4;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Personagem[]>(this.API + ".json");
  }

  edit(id: number, inventario: Inventario[]) {
    return this.http.put(this.API + "/" + id + "/inventario.json", inventario).pipe(take(1));
  }

  getCampanha() {
    return this.http.get<Campanha>(this.API);
  }

  putCampanha(campanha: Campanha) {
    return this.http.put(this.API, campanha).pipe(take(1));
  }

  async hashString(input: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
  }
}
