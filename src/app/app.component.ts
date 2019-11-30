import {Component} from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    moment.locale('pl');
  }

  closeModalOnBodyClickListener(){
    document.body.addEventListener('click', (e) => {
      const modal = document.getElementsByClassName('f-modal')[0];
      if(modal != null){
        modal.classList.add('f-modal-hidden')
      }
    })
  }
}
