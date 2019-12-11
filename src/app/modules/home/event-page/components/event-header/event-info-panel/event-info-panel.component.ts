import {Component, Input, OnInit} from '@angular/core';
import {OpenSettingsService} from '../../../services/opensettings.service';
import EventShortened from '../../../models/event-shortened.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-header-event-info',
  templateUrl: './event-info-panel.component.html',
  styleUrls: ['./event-info-panel.component.scss']
})
export class EventInfoPanelComponent implements OnInit {
  @Input() activeSettings;
  @Input() eventData : EventShortened;
  @Input() isEventAdmin: boolean;
  settingsVariantModalOpened: boolean = false;
  settingsVariantModalOpenedBeingChanged: boolean = false;
  cursorOverVariantModal: boolean = false;


  constructor(private router: Router, private openSettingsService: OpenSettingsService) { }

  ngOnInit() {
  }

  /*openEventSettingsModal(){
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
  }*/

  navigateToSettings() {
    this.router.navigate(["app/event", this.eventData.id, "settings"], {queryParams: {sp: 'basic'}})
  }
}
