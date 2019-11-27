import {Component, Input, OnInit} from '@angular/core';
import ExemplaryMessage from '../../models/exemplary-message.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() exemplaryMessage: ExemplaryMessage;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDialog(){
    this.router.navigate(['/app/dialog'], { queryParams: { to : this.exemplaryMessage.interlocutorId  }});
  }
}
