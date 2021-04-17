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
  dano: number = 0;
  pvTemp: number = 0;

  char= {
      "nome": "",
      "iniciativa": 0,
      "pv": 0,
      "dano": 0,
      "pvTemp": 0
  };

  ngOnInit(): void {
  }

  addStats(index: number, stat: number){
    if(stat == 1){
      this.character[index].dano += this.dano;
      console.log(this.character[index].dano);
    }
    else if(stat == 2){
      this.character[index].pvTemp += this.pvTemp;
    }
  }

  addNewChar(){
    if(this.character.length != 0){
      let charTemp: Character[] = [];
      for(let i = 0; i < this.character.length; i++){
        if(this.char.iniciativa > this.character[i].iniciativa){
          console.log("alo");
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
        /*for(let i = 0; i<this.character.length; i++){
          if(this.char.iniciativa > this.character[i].iniciativa){
            console.log("alo");
            this.character.push(this.char);
          }
          else{
            console.log("alo");
          }*/
        }
      }

    else{
          this.character.push(this.char);
          console.log(this.character.length);
    }
    this.char =  {
      "nome": "",
      "iniciativa": 0,
      "pv": 0,
      "dano": 0,
      "pvTemp": 0
  };
  }

}
