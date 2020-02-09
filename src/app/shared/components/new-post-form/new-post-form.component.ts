import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import NewPost from '../../../modules/home/profile-page/models/new-post.model';


@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent {
  @Output() event : EventEmitter<Object> = new EventEmitter<Object>();
  @ViewChild('image') image;
  @ViewChild('newMessageContent') newMessageContent;

  onSubmit() {
    const image = this.image.nativeElement;
    if(image.files && image.files[0]){
      this.event.emit(new NewPost(this.newMessageContent.nativeElement.value, image.files[0]));
    } else {
      this.event.emit(new NewPost(this.newMessageContent.nativeElement.value, null));
    }
  }
}
