import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent {
  id_tec = ''

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  constructor(
    private router: Router,
    private service: ClienteService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_tec).subscribe(resposta => {
      this.cliente = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.id_tec).subscribe({
      next: resposta => {
      this.router.navigate(['clientes'])
      this.service.message('Cliente deletado com sucesso!')
    }, error: err => {
      console.log(err)
      if (err.error.error.match('Técnico possui ordens de serviço, não pode ser deletado!')) {
        this.service.message('Cliente possui ordem de serviço vinculado a um técnico');
      }
    }
    })
  }

  cancel(): void {
    this.router.navigate(['clientes'])
  }

}
