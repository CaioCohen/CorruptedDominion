import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef: BsModalRef | undefined;
  campanha: any = "";
  source = "../../../assets/imgs/logoThroughThePlanes.png";

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    if('campanha' in sessionStorage){
      this.campanha = sessionStorage.getItem('campanha');
    }
    this.source = this.campanha == "CD" ? "../../../assets/imgs/logoCorruptedDomain.png" : "../../../assets/imgs/logoThroughThePlanes.png";
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

  invMob(){
    sessionStorage.setItem("mobile", "yes");
    this.decline();
  }

  trocarCampanha(){
    var camp = this.campanha == "CD" ? "TP" : "CD";
    sessionStorage.setItem("campanha", camp);
    window.location.reload();
  }

}
