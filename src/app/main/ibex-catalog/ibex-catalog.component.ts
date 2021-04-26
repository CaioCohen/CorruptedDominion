import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ibex-catalog',
  templateUrl: './ibex-catalog.component.html',
  styleUrls: ['./ibex-catalog.component.scss']
})
export class IbexCatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pop(mensagem: string){
    alert(mensagem);
  }

}
