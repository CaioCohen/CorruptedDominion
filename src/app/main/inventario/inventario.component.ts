import { Component, OnInit } from '@angular/core';
import {InvService} from '../../services/inv.service';
import {Personagem} from '../../models/personagem';
import {Inventario} from '../../models/personagem';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  chars: Personagem[] = [];
  personagem: Personagem = {
    "nome": "",
    "inventario": [{
      "item": "",
      "peso": "",
      "quantidade": 0,
      "valor": ""
  }]};

  inventario: Inventario = {
    "item": "",
    "peso": "",
    "quantidade": 0,
    "valor": ""
};
  loaded: boolean = false;
  mob: boolean = false;
  charId: number = -1;

  constructor(private service: InvService) { }

  ngOnInit(): void {
    if(!('mobile' in sessionStorage)){
      this.get();
    }
    else{
      this.mob = true;
    }
  }

  get(){
    this.service.list().subscribe(dados =>{
      this.chars = dados;
      if("char" in sessionStorage){
        var char = sessionStorage.getItem('char');
        if(char == "Jorgus"){
          this.personagem = this.chars[0];
          this.charId = 0;
        }
        else if(char == "Siddartha"){
          this.personagem = this.chars[1];
          this.charId = 1;
        }
        else if(char == "Drezig"){
          this.personagem = this.chars[2];
          this.charId = 2;
        }
        else if(char == "Yulia"){
          this.personagem = this.chars[3];
          this.charId = 3;
        }
      }
      console.log(this.chars);
      this.loaded = true;
    });
  }

  getMob(value: string){
    var id= +value;
    this.service.list().subscribe(dados =>{
      this.chars = dados;
      this.personagem = this.chars[id];
      console.log(this.chars);
      this.loaded = true;
    });
  }

  delete(index:number){
    this.personagem.inventario.splice(index, 1);
  };

  addItem(){
    this.personagem.inventario.push(this.inventario);
  }

  update(){
    this.service.edit(this.charId,this.personagem.inventario).subscribe(response => alert("inventario salvo"));
  }

}
