import { Component ,Input} from '@angular/core';
import { Note } from '../models/Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input()
  Note:Note={};
  priority:any=this.Note.priority;

}
