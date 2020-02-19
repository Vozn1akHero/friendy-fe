import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import NewPost from '../../../modules/home/profile-page/models/new-post.model';


@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent {
  @Output() event : EventEmitter<Object> = new EventEmitter<Object>();
  selectedImage: File;
  @ViewChild('image') image;
  @ViewChild('newMessageContent') newMessageContent;

  onSubmit() {
    if(this.selectedImage){
      this.event.emit(new NewPost(this.newMessageContent.nativeElement.value, this.selectedImage));
    } else {
      this.event.emit(new NewPost(this.newMessageContent.nativeElement.value, null));
    }
  }

  removeSelectedImage() {
    this.selectedImage = null;
    this.image.nativeElement.value = '';
  }

  onImageSelection() {
    this.selectedImage = this.image.nativeElement.files[0];
  }
}
