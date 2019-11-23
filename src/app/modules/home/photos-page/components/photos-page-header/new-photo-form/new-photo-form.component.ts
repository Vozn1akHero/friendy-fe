import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {EventPhotoService} from '../../../services/event-photo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-photo-form',
  templateUrl: './new-photo-form.component.html',
  styleUrls: ['./new-photo-form.component.scss']
})
export class NewPhotoFormComponent implements OnInit {
  @ViewChild('image') image;
  @Input() id;

  constructor(private eventPhotoService : EventPhotoService,
              private router : Router) { }

  ngOnInit() {
  }

  onImageChoosing(){
    const image = this.image.nativeElement;
    if(image.files && image.files[0]){
      this.eventPhotoService.post(this.id, image.files[0])
    } else {
      alert("wybierz zdjęcie")
    }
  }
}
