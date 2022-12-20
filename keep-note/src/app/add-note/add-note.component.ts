import { Component , EventEmitter} from '@angular/core';
import { Note } from '../models/Note';
import { Notes } from '../models/Notes';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  noteAdded =new EventEmitter()
  note:Note={};
  flag=false;
  constructor(private noteService:NoteService){}

  AddNote(){
   console.log(this.note)
    if(this.note.title)
    {
    this.noteService.addNote(this.note).subscribe({
      next : data=>{
        console.log(this.note)
        this.noteAdded.emit(this.note);
      this.note={};
      alert("Note Submitted!!!!!!")
    },
    error: e=>{alert("Failed to Add Note due to Network Error !! Please Try Again Later");
  }
    })
  }
}
onsubmit(data:any){
  
}
}