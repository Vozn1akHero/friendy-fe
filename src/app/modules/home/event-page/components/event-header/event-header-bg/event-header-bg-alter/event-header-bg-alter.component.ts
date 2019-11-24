import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {EventBackgroundService} from '../../../../services/event-background.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-header-bg-alter',
  templateUrl: './event-header-bg-alter.component.html',
  styleUrls: ['./event-header-bg-alter.component.scss']
})
export class EventHeaderBgAlterComponent {
  @Input() activeSettings;
  @ViewChild('image') image;
  @Input() eventId: number;

  constructor(private eventBackgroundService: EventBackgroundService) { }

  setNewEventBackground() {
    const image = this.image.nativeElement;
    if(image.files && image.files[0]){
      this.eventBackgroundService.update(this.eventId, image.files[0])
    } else {
      alert("wybierz zdjęcie")
    }
  }
}
