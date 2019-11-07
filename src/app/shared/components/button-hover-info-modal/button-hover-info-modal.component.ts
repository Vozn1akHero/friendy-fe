import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-hover-info-modal',
  templateUrl: './button-hover-info-modal.component.html',
  styleUrls: ['./button-hover-info-modal.component.scss']
})
export class ButtonHoverInfoModalComponent {
  @Input() text: string;
}
