import {Component, Input, OnInit} from '@angular/core';
import {OpenSettingsService} from '../../../services/opensettings.service';
import EventShortened from '../../../models/event-shortened.model';
import {EventParticipantService} from '../../../services/event-participant.service';
import {UserIdService} from '../../../../../../shared/services/user-id.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {UserParticipationStatusService} from '../../../services/user-participation-status.service';

@Component({
  selector: 'app-event-header-event-info',
  templateUrl: './event-info-panel.component.html',
  styleUrls: ['./event-info-panel.component.scss']
})
export class EventInfoPanelComponent implements OnInit {
  @Input() activeSettings;
  @Input() eventData : EventShortened;
  settingsVariantModalOpened: boolean = false;
  settingsVariantModalOpenedBeingChanged: boolean = false;
  cursorOverVariantModal: boolean = false;


  constructor(private openSettingsService: OpenSettingsService) { }

  ngOnInit() {
  }

  openEventSettingsModal(){
    if(!this.activeSettings) {
      this.settingsVariantModalOpenedBeingChanged = false;
      this.settingsVariantModalOpened = true;
    }
  }

  closeEventSettingsModal(){
    if(!this.activeSettings) {
      this.settingsVariantModalOpenedBeingChanged = true;
      setTimeout(() => {
        if (this.settingsVariantModalOpenedBeingChanged && !this.cursorOverVariantModal) {
          this.settingsVariantModalOpenedBeingChanged = false;
          this.settingsVariantModalOpened = false;
        }
      }, 500)
    }
  }

  cursorOverVariantModalOn(){
    this.cursorOverVariantModal = true;
    this.settingsVariantModalOpenedBeingChanged = false;
  }

  cursorOverVariantModalOff(){
    this.cursorOverVariantModal = false;
    this.settingsVariantModalOpenedBeingChanged = true;
    setTimeout(() => {
      if (this.settingsVariantModalOpenedBeingChanged && !this.cursorOverVariantModal){
        this.settingsVariantModalOpenedBeingChanged = false;
        this.settingsVariantModalOpened = false;
      }
    }, 500)
  }

  openBasicEventSettings(){
    this.openSettingsService.openedSettingsValueChanged = true;
  }

  closeBasicEventSettings(){
    this.settingsVariantModalOpened = false;
    this.openSettingsService.openedSettingsValueChanged = false;
  }


}
