import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missoes',
  templateUrl: './missoes.component.html',
  styleUrls: ['./missoes.component.scss']
})
export class MissoesComponent implements OnInit {

  constructor(private _router: Router) { }
  campanha:any = 'TP';

  ngOnInit(): void {
    if('campanha' in sessionStorage){
      this.campanha = sessionStorage.getItem('campanha');
    }
    if(this.campanha != 'CD'){
      this._router.navigate(['']);
    }
    
  }

}
