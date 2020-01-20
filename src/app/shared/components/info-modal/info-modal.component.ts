import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {InfoModalService} from './info-modal.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  message$: Observable<string>;

  constructor(private successModalService : InfoModalService) {
    this.message$ = this.successModalService.message$;
  }

  ngOnInit() {
  }

  closePopup() {
    this.successModalService.close();
  }
}
