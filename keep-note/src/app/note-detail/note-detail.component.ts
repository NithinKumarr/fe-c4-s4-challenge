import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/Note';
import { RouteService } from '../route.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent {

  constructor(private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private routeService: RouteService) { }

  note: Note = {};
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteService.getFruit(+id).subscribe(data => {
        this.note = data;
      })
    });
  }
  deleteNote(){
    this.noteService.deleteNote(this.note?.id).subscribe(data => {
     this.routeService.toHome();
    })
  }

  editNote() {
    let div=document.querySelector("#card-content");
    // let mydiv=document.createElement("div");
    // div?.appendChild(mydiv);

    // let title=document.createElement("input")
    // mydiv.appendChild(title)
    // title.setAttribute("type","text");
    let mybtn=document.createElement("button")
    mybtn.setAttribute("placeholder","Edit")
    div?.appendChild(mybtn);


    // div?.setAttribute("style","border:1px solid red")
    this.noteService.editFruit(this.note?.id, this.note).subscribe(data => {
      this.note = data;
      this.routeService.toHome();
    })
  }

}
  

