import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banned-users-settings',
  templateUrl: './banned-users-settings.component.html',
  styleUrls: ['./banned-users-settings.component.scss']
})
export class BannedUsersSettingsComponent implements OnInit {
  @Input() eventId: number;

  ngOnInit(): void {
  }

}
