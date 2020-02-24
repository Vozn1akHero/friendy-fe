import {Component} from '@angular/core';

@Component({
  selector: 'app-button-hover-info-popover',
  templateUrl: './button-hover-info-popover.component.html'
})
export class ButtonHoverInfoPopoverComponent{
  text: string;
  private styles = {
    'position': 'absolute',
    'min-width': '10rem',
    'border-radius': '1rem',
    'pointer-events': 'none',
    'padding': '1rem',
    'background': 'white',
    'color': 'black',
    'box-shadow': '0 0 5px 0 #b5b5b5'
  };
}
