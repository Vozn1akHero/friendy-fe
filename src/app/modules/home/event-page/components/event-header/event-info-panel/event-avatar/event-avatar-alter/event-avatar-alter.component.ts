import {Component, Input, ViewChild} from '@angular/core';
import {EventAvatarService} from '../../../../../services/event-avatar.service';

@Component({
  selector: 'app-event-avatar-alter',
  templateUrl: './event-avatar-alter.component.html',
  styleUrls: ['./event-avatar-alter.component.scss']
})
export class EventAvatarAlterComponent {
  @ViewChild('image') image;
  @Input() eventId: number;

  constructor(private eventAvatarService : EventAvatarService) { }

  setNewEventAvatar() {
    const image = this.image.nativeElement;
    if(image.files && image.files[0]){
      this.eventAvatarService.update(this.eventId, image.files[0])
    } else {
      alert("wybierz zdjęcie")
    }
  }
}
