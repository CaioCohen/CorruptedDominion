import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aleatorios',
  templateUrl: './aleatorios.component.html',
  styleUrls: ['./aleatorios.component.scss']
})
export class AleatoriosComponent implements OnInit {

  constructor() { }
  campanha: any = "TP";

  ngOnInit(): void {
    if('campanha' in sessionStorage){
      this.campanha = sessionStorage.getItem('campanha');
    }
  }

}
