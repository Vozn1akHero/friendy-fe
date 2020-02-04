import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-participants-search',
  templateUrl: './participants-search.component.html',
  styleUrls: ['./participants-search.component.scss']
})
export class ParticipantsSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput;

  constructor() { }

  ngOnInit() {
  }

  searchParticipants() {
    //this.searchInput.nativeElement.textContent
  }
}
