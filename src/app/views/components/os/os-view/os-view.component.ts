import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { OS } from 'src/app/models/os';
import { OsService } from 'src/app/service/os.service';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css']
})
export class OsViewComponent {

  os: OS = {
    tecnico:'',
    cliente:'',
    observacoes:'',
    prioridade:'',
    status:''
  }

  constructor(
    private service : OsService,
    private router : Router,
    private route : ActivatedRoute

    ){}

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.os.id).subscribe(response => {
      this.os= response
    })
    }

    return(): void {
      this.router.navigate(['/os'])
    }
  }


