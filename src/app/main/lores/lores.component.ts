import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lores',
  templateUrl: './lores.component.html',
  styleUrls: ['./lores.component.scss']
})
export class LoresComponent implements OnInit {

  constructor() { }
  campanha: any = "TP";

  ngOnInit(): void {
    if('campanha' in sessionStorage){
      this.campanha = sessionStorage.getItem('campanha');
    }
  }

}
