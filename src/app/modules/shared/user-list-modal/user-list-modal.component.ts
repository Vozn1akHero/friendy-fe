import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list-modal',
  templateUrl: './user-list-modal.component.html',
  styleUrls: ['./user-list-modal.component.scss']
})
export class UserListModalComponent implements OnInit {
  @Input() title: string;
  @Input() typeIndex: number;
  @Input() data: {
    id: number,
    name: string,
    surname: string,
    avatar: string
  }[];

  constructor() { }

  ngOnInit() {
  }

  updateList() {

  }
}
