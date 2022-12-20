import { Component, Input, OnInit} from '@angular/core';
import { Note } from '../models/Note';
import { Notes } from '../models/Notes';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit{

  
  notes:Note[]=[];
  constructor(private noteService:NoteService){}
  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next: data=>{
      this.notes=data;
      },
      error : e=>{alert("Network Error !! Please Try Again Later");}
    })
  }

  onSearchTextChanged(searchText:string){
    this.noteService.getNotes().subscribe({
     next: (data:any)=>{
      if(searchText || searchText!=''){
        this.notes = data.filter((Note:any) => Note.title?.includes(searchText));
      }
      else{this.notes=data}
     },
     error:e=>{alert("Network Error !! Please Try Again Later");}
    })
}
onNoteAdded(note:any){
this.notes.push(note);
}
}
