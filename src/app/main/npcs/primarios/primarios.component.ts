import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primarios',
  templateUrl: './primarios.component.html',
  styleUrls: ['./primarios.component.scss']
})
export class PrimariosComponent implements OnInit {

  constructor() { }
  campanha: any = "TP";

  ngOnInit(): void {
    if('campanha' in sessionStorage){
      this.campanha = sessionStorage.getItem('campanha');
    }
  }

}
