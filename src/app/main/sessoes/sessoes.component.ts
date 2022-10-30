import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessoes',
  templateUrl: './sessoes.component.html',
  styleUrls: ['./sessoes.component.scss']
})
export class SessoesComponent implements OnInit {

  constructor() { }

  campanha: any = "TP";

  ngOnInit(): void {
    if('campanha' in sessionStorage){
      this.campanha = sessionStorage.getItem('campanha');
    }
  }

  alerta(mensagem: string){
    alert(mensagem);
  }

}
