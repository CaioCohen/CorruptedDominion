import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'secundarios',
  templateUrl: './secundarios.component.html',
  styleUrls: ['./secundarios.component.scss']
})
export class SecundariosComponent implements OnInit {

  constructor() { }
  campanha: any = "TP";

  ngOnInit(): void {
    if('campanha' in sessionStorage){
      this.campanha = sessionStorage.getItem('campanha');
    }
  }

}
