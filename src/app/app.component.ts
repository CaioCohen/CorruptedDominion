import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'corruptedDominion';
  campanha: string | null= "";
  public constructor() {

  }

  ngOnInit(): void {
    if (!('campanha' in sessionStorage)) {
      sessionStorage.setItem("campanha", "HW");
    } else {
      this.campanha = sessionStorage.getItem("campanha");
    }
  }
}
