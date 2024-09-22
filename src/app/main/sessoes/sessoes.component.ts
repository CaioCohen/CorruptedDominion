import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Campanha } from 'src/app/models/campanha';
import { InvService } from 'src/app/services/inv.service';

@Component({
  selector: 'app-sessoes',
  templateUrl: './sessoes.component.html',
  styleUrls: ['./sessoes.component.scss']
})
export class SessoesComponent implements OnInit {

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

  async editar(){
    this.isEdit = false;
    let cripto = await this.service.hashString(this.senha);
      if(cripto == "51f9f5c6ce77a4e975e045f7d9dadc5dd4f32bbbdaed90b96743fa3f293a7675"){
        this.service.putCampanha(this.info).subscribe(response =>{
          alert("Informações salvas");
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
