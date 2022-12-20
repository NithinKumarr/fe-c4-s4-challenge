import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string="";
  @Output()
  searchTextChanged=new EventEmitter();

  searchNote(){
    this.searchTextChanged.emit(this.searchText);
  }
}

