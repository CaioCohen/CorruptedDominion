import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import {Character} from '../../models/character';
import { Iniciativa } from 'src/app/models/iniciativa';

@Component({
  selector: 'app-combate',
  templateUrl: './combate.component.html',
  styleUrls: ['./combate.component.scss']
})
export class CombateComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  character: Character[] = [];
  iniciativas: Iniciativa[] = [];
  novaIniciativa: Iniciativa = new Iniciativa();
  dano: number[] = [];
  pvTemp: number[] = [];
  modalRef: BsModalRef | undefined;

  char : Character = new Character();

  ngOnInit(): void {
    if (sessionStorage.getItem("combatTable") != null){
      this.character = JSON.parse(sessionStorage.getItem("combatTable") || '{}');
    }
    if("iniciativas" in localStorage){
      this.iniciativas = JSON.parse(localStorage.getItem("iniciativas") || '{}');
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
    this.char =  new Character();
    this.saveTable();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    //this.modalRef.hide();
  }

  decline(): void {
    if(this.modalRef != undefined){
      this.modalRef.hide();
    }
  }

  salvarIniciativas(){
    this.iniciativas.push(this.novaIniciativa);
    localStorage.setItem("iniciativas",JSON.stringify(this.iniciativas))
    this.novaIniciativa = new Iniciativa();
  }

  removerIniciativa(i: number){
    this.iniciativas.splice(i, 1);
  }

  getClasseVantagem(i: number){
    return this.iniciativas[i].vantagem == 2 ? "botao-vantagem" : this.iniciativas[i].vantagem == 0 ? "botao-desvantagem" : "botao-sem-vantagem";
  }

  toggleVantagem(i: number){
    this.iniciativas[i].vantagem += 1;
    this.iniciativas[i].vantagem = this.iniciativas[i].vantagem % 3;
  }

  rollDice(n : number) {
    return Math.floor(Math.random() * n) + 1;
  }

  rolarIniciativas(){
    this.character = [];
    this.iniciativas.forEach( i =>{
      let dados = [];
      dados.push(this.rollDice(20) + i.iniciativa);
      dados.push(this.rollDice(20) + i.iniciativa);
      let resultado = 0;
      if(i.vantagem == 2){
        resultado = Math.max(...dados);
      }else if (i.vantagem == 0){
        resultado = Math.min(...dados);
      }else{
        resultado = dados[0];
      }
      resultado += (i.iniciativa/10); //Evitar empates
      this.char.nome = i.nome;
      this.char.iniciativa = resultado;
      this.char.pv = i.pv;
      this.addNewChar();
    })
  }

}
