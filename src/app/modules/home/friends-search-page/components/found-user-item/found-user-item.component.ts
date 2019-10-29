import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-found-user-item',
  templateUrl: './found-user-item.component.html',
  styleUrls: ['./found-user-item.component.scss']
})
export class FoundUserItemComponent implements OnInit {
  @Input() foundUserData: any;

  constructor() { }

  ngOnInit() {
  }

}
