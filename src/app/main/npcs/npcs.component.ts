import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npcs',
  templateUrl: './npcs.component.html',
  styleUrls: ['./npcs.component.scss']
})
export class NpcsComponent implements OnInit {

  npcPriority: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  page(n: number){
    this.npcPriority = n;
  }

}
