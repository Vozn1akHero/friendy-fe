import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DialogWsService} from './services/dialog-ws.service';

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss']
})
export class DialogPageComponent implements OnInit, OnDestroy {
  newMessage : FormGroup = new FormGroup({
    newMessageContent: new FormControl('', [Validators.required, Validators.minLength(1)]),
    image: new FormControl('')
  });
  interlocutorId: string;

  constructor(private route: ActivatedRoute,
              private dialogWsService: DialogWsService) {}

  ngOnInit() {
    this.interlocutorId = this.route.snapshot.params.to;

    this.joinGroup();
  }

  joinGroup(){
    this.dialogWsService.joinChat(this.interlocutorId);
  }

  ngOnDestroy(): void {

  }
}
