import { Component, OnInit } from '@angular/core';

import {Character} from '../../models/character';

@Component({
  selector: 'app-combate',
  templateUrl: './combate.component.html',
  styleUrls: ['./combate.component.scss']
})
export class CombateComponent implements OnInit {

  constructor() { }

  character: Character[] = [];
  dano: number[] = [];
  pvTemp: number[] = [];

  char= {
      "nome": "",
      "iniciativa": 0,
      "pv": 0,
      "dano": 0,
      "pvTemp": 0
  };

  ngOnInit(): void {
    if (sessionStorage.getItem("combatTable") != null){
      this.character = JSON.parse(sessionStorage.getItem("combatTable") || '{}');
    }
  }

  deleteChar(index: number){
    this.character.splice(index, 1);
  }

  addStats(index: number, stat: number){
    if(stat == 1){
      this.character[index].dano += this.dano[index];
      this.dano[index] = 0;
    }
    else if(stat == 2){
      this.character[index].pvTemp += this.pvTemp[index];
      this.pvTemp[index] = 0;
    }
    this.saveTable();
  }

  saveTable(){
    sessionStorage.setItem("combatTable", JSON.stringify(this.character));
  }

  deleteTable(){
    event?.preventDefault();
    sessionStorage.removeItem("combatTable");
    this.character = [];
  }

  addNewChar(){
    if(this.character.length != 0){
      let charTemp: Character[] = [];
      for(let i = 0; i < this.character.length; i++){
        if(this.char.iniciativa > this.character[i].iniciativa){
          for(let j = 0; j < i; j++){
            charTemp.push(this.character[j]);
          }
          charTemp.push(this.char);
          for(let j = i; j < this.character.length; j++){
            charTemp.push(this.character[j]);
          }
          this.character = charTemp;
          break;
        }
        else if(i == this.character.length - 1){
         this.character.push(this.char);
         break;
        }
        else{
          continue;
        }
      }
   }

    else{
          this.character.push(this.char);
    }
    this.char =  {
      "nome": "",
      "iniciativa": 0,
      "pv": 0,
      "dano": 0,
      "pvTemp": 0
    };
    this.saveTable();
  }

}
