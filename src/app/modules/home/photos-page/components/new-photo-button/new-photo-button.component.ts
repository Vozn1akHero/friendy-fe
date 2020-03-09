import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {EventPhotoService} from '../../services/event-photo.service';
import {Router} from '@angular/router';
import {UserPhotoService} from '../../services/user-photo.service';

@Component({
  selector: 'app-new-photo-form',
  templateUrl: './new-photo-button.component.html',
  styleUrls: ['./new-photo-button.component.scss']
})
export class NewPhotoButtonComponent implements OnInit {
  @ViewChild('image') image;
  @Input() chosenSubpage: number;
  @Input() id;

  constructor(private eventPhotoService : EventPhotoService,
              private userPhotoService: UserPhotoService) { }

  ngOnInit() {
  }

  onImageChoosing(){
    const image = this.image.nativeElement;
    if(image.files && image.files[0]){
      if(this.chosenSubpage === 1){
        this.userPhotoService.post(image.files[0]);
      }
      else if(this.chosenSubpage === 2){
        this.eventPhotoService.post(this.id, image.files[0]);
      }
    } else {
      alert("wybierz zdjęcie")
    }
  }
}
