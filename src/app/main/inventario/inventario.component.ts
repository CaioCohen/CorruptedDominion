import { Component, OnInit } from '@angular/core';
import {InvService} from '../../services/inv.service';
import {Personagem} from '../../models/personagem';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  chars: Personagem[] = [];
  personagem: any;
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
          console.log("alo");
        }
        else if(char == "Siddartha"){
          this.personagem = this.chars[1];
        }
        else if(char == "Drezig"){
          this.personagem = this.chars[2];
        }
        else if(char == "Yulia"){
          this.personagem = this.chars[3];
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

}
