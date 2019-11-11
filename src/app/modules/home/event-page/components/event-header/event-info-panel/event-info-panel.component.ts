import {Component, Input, OnInit} from '@angular/core';
import {OpenSettingsService} from '../../../services/opensettings.service';
import EventShortened from '../../../models/event-shortened.model';

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
    this.activeSettings = true;
    this.openSettingsService.openedSettingsValueChanged.next(this.activeSettings);
  }

  closeBasicEventSettings(){
      this.settingsVariantModalOpened = false;
      this.activeSettings = false;
      this.openSettingsService.openedSettingsValueChanged.next(this.activeSettings);
  }
}
