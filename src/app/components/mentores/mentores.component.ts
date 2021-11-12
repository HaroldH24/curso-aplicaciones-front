import { Component, OnInit } from '@angular/core';
import { MentoriaService } from 'src/app/services/mentoria.service';

@Component({
  selector: 'app-mentores',
  templateUrl: './mentores.component.html',
  styleUrls: ['./mentores.component.css']
})
export class MentoresComponent implements OnInit {
  mentores: any = [];
  constructor(
    private readonly mentoriaService: MentoriaService
  ) { }

  ngOnInit(): void {
    this.listaMentores()
  }

  listaMentores(){
    this.mentoriaService.getMentores().subscribe(
      (res) => {
        this.mentores = res;
      },
      (err) => console.error(err)
    )
  }

}
