import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Campanha, NPC } from 'src/app/models/campanha';
import { InvService } from 'src/app/services/inv.service';

@Component({
  selector: 'primarios',
  templateUrl: './primarios.component.html',
  styleUrls: ['./primarios.component.scss']
})
export class PrimariosComponent implements OnInit {

  constructor(private service: InvService,
    private modalService: BsModalService,
  ) { }
  campanha: any = "HW";
  info: Campanha = new Campanha();
  isEdit: boolean = false;
  isAdmin: boolean = false;
  senha:string = "";
  modalRef: BsModalRef | undefined;

  ngOnInit(): void {
    if('campanha' in sessionStorage){
      this.campanha = sessionStorage.getItem('campanha');
    }
    if(this.campanha == "HW"){
      this.getCampanha();
    }
    if("isAdmin" in sessionStorage){
      this.isAdmin = sessionStorage.getItem("isAdmin") == "sim";
    }
  }

  alerta(mensagem: string){
    alert(mensagem);
  }

  getCampanha(){
    this.service.getCampanha().subscribe(response =>{
      this.info = response;
    }, error =>{
      alert("Um erro ocorreu enquanto recuperava as informações da campanha, cheque a internet.");
    })
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

  addNPC(){
    if(!this.info.npcs){
      this.info.npcs = []
    }
    this.info.npcs.push(new NPC({
      "descricao": "Descrição do novo NPC",
      "nome": "Novo NPC",
      "urlImagem": "",
      "tipo": 1
    }))
  }

  deleteNPC(i:number){
    this.info.npcs.splice(i,1);
  }

  async editar(){
    this.isEdit = false;
    let cripto = await this.service.hashString(this.senha);
      if(this.service.validate(cripto)){
        this.service.putCampanha(this.info).subscribe(response =>{
          this.decline();
        }, error =>{
          alert("Um erro ocorreu enquanto salvava as informações da campanha, cheque a internet.");
        })
      }else{
        alert("senha incorreta");
      }
    
  }

  onEdit(){
    this.isEdit = !this.isEdit;
  }

}
