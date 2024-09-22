import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'corruptedDominion';

  ngOnInit(): void {
    if(!('campanha' in sessionStorage)){
      sessionStorage.setItem("campanha", "HW");
    }
  }
}
