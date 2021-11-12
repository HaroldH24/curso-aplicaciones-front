import { Component, OnInit } from '@angular/core';
import { MentorizadosService } from 'src/app/services/mentorizados.service';

@Component({
  selector: 'app-mentorizados',
  templateUrl: './mentorizados.component.html',
  styleUrls: ['./mentorizados.component.css']
})
export class MentorizadosComponent implements OnInit {
  mentorizados: any = [];
  constructor(
    private readonly mentorizadoService: MentorizadosService
  ) { }

  ngOnInit(): void {
    this.listaMentorizados()
  }

  listaMentorizados(){
   this.mentorizadoService.getMentorizados().subscribe(
    (res) => {
      this.mentorizados = res;
      console.log(res)
    },
    (err) => console.error(err)
   )
  }
}
