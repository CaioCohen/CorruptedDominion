import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pavilhao',
  templateUrl: './pavilhao.component.html',
  styleUrls: ['./pavilhao.component.scss']
})
export class PavilhaoComponent implements OnInit {

  floor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  andar(n:number){
    this.floor = n;
  }

}
