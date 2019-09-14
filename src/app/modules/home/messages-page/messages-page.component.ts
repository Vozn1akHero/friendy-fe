import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit {
  choosenTypeOfMessages : string = 'all';

  constructor() { }

  ngOnInit() {
  }

}
