import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() name : string;
  @Input() id: number;
  @Input() surname: string;
  @Input() avatar: string;

  constructor() { }

  ngOnInit() {
  }

}
