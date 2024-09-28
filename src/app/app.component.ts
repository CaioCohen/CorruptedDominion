import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'corruptedDominion';
  campanha: string | null= "";
  public constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
    if (!('campanha' in sessionStorage)) {
      sessionStorage.setItem("campanha", "HW");
    } else {
      this.campanha = sessionStorage.getItem("campanha");
    }
    this.setBackground();
  }

  setBackground() {

    this.renderer.setStyle(document.body, 'background-image', this.campanha == "HW" ? 'url(assets/imgs/fundoHW.jfif)' : "url(assets/imgs/fundo.jpg)");
    //this.renderer.setStyle(document.body, 'background-image', "url(assets/imgs/fundoHW.jfif)");
    this.renderer.setStyle(document.body, 'background-size', '100% 100%'); // Optional: ensure it covers the whole screen
  }
}
