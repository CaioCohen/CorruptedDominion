import { Component, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InvService } from 'src/app/services/inv.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef: BsModalRef | undefined;
  campanha: any = "";
  source = "../../../assets/imgs/logoThroughThePlanes.png";
  senha: string = "";

  constructor(private modalService: BsModalService,
              private service: InvService,
              private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if('campanha' in sessionStorage){
      this.campanha = sessionStorage.getItem('campanha');
    }
    switch(this.campanha){
      case("CD"):
        this.source = "../../../assets/imgs/logoCorruptedDomain.png";
        break;
      case("PR"):
        this.source = "../../../assets/imgs/logoThroughThePlanes.png";
        break;
      case("HW"):
        this.source = "../../../assets/imgs/logoHumblewood.png";
        break;
    }
    this.setBackground();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    //this.modalRef.hide();
  }

  openModalAdmin(template: TemplateRef<any>) {
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
    switch(this.campanha){
      case("CD"):
        this.campanha = "HW"
        break;
      case("HW"):
        this.campanha = "PR"
        break;
      case("PR"):
        this.campanha = "CD"
        break;
    }
    sessionStorage.setItem("campanha", this.campanha);
    window.location.reload();
  }

  async virarDM() {
    if (this.senha) {
      let cripto = await this.service.hashString(this.senha);
      if(this.service.validate(cripto)){
        sessionStorage.setItem("isAdmin","sim");
      }else{
        alert("senha incorreta");
      }
    }
    this.decline();
    window.location.reload();
  }

  setBackground() {
    this.renderer.setStyle(document.body, 'background-image', this.campanha == "HW" ? 'url(assets/imgs/fundoHW.jfif)' : "url(assets/imgs/fundo.jpg)");
    //this.renderer.setStyle(document.body, 'background-image', "url(assets/imgs/fundoHW.jfif)");
    this.renderer.setStyle(document.body, 'background-size', '100% 100%'); // Optional: ensure it covers the whole screen
  }

}
