import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/Note';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  URL:string="http://localhost:3000/notes";

  constructor(private http:HttpClient) { }

  getNotes():Observable<Array<Note>>{
    return this.http.get<Array<Note>>("http://localhost:3000/notes");
  }
  addNote(note:Note){
    return this.http.post("http://localhost:3000/notes",note);
   
  }
  getFruit(id?: number){
    return this.http.get<Note>(`${"http://localhost:3000/notes"}/${id}`);
  }

  editFruit(id?: number, note?: Note) {
    return this.http.put<Note>(`${"http://localhost:3000/notes"}/${id}`,note);
  }

  deleteNote(id?: number){
    return this.http.delete<Note>(`${"http://localhost:3000/notes"}/${id}`);
  }
}
