import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('appWrapper') appWrapper;

  constructor() {
    moment.locale('pl');
  }

  ngOnInit(): void {
    /*document.addEventListener('click', e => {
      const modal = document.getElementsByClassName('f-modal')[0];
      if(modal != null){
        modal.classList.add('f-modal-hidden')
      }
    })*/
  }
}
