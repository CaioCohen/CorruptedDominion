import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef: BsModalRef | undefined;
  charSelected: boolean = false;
  char: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    if('char' in sessionStorage){
      this.char = sessionStorage.getItem('char');
      this.charSelected = true;
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    //this.modalRef.hide();
  }

  decline(): void {
    if(this.modalRef != undefined){
      this.modalRef.hide();
    }
  }

  setChar(id: number){
    switch(id){
      case 0:{
        sessionStorage.setItem('char', 'Jorgus');
        break;
      }
      case 1:{
        sessionStorage.setItem('char', 'Siddartha');
        break;
      }
      case 2:{
        sessionStorage.setItem('char', 'Drezig');
        break;
      }
      case 3:{
        sessionStorage.setItem('char', 'Yulia');
        break;
      }
    }
    window.location.reload();
  }

  invMob(){
    sessionStorage.setItem("mobile", "yes");
    this.decline();
  }

}
