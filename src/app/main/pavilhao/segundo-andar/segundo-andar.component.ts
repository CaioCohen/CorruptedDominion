import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'segundo-andar',
  templateUrl: './segundo-andar.component.html',
  styleUrls: ['./segundo-andar.component.scss']
})
export class SegundoAndarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pop(mensagem: string){
    alert(mensagem);
  }

}
