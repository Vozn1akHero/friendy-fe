import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Form, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-new-post',
  templateUrl: './profile-new-post.component.html',
  styleUrls: ['./profile-new-post.component.scss']
})
export class ProfileNewPostComponent implements OnInit {
  @Output() newPostEvent : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor() { }

  ngOnInit() {
  }

  onNewPostSubmit(newPost:FormGroup) {
    this.newPostEvent.emit(newPost);
  }
}
