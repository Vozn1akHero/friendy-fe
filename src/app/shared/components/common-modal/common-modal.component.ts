import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({
          opacity: '0'
        }),
        animate(
          '300ms ease-in',
          style({ opacity: '1' })
        )
      ]), transition(':leave', [
        style({
          opacity: '1'
        }),
        animate(
          '300ms ease-out',
          style({ opacity: '0' })
        )
      ])
    ])
  ]
})
export class CommonModalComponent implements OnInit, OnDestroy {
  @ViewChild("commonModal") commonModal;

  constructor() { }

  ngOnInit() {
    const body = document.querySelector("body");
    body.style.overflowY = 'hidden';
    const y = window.scrollY;
    this.commonModal.nativeElement.style.top = y + 'px';
      window.scrollTo({
      top: y
    });
  }

  ngOnDestroy(): void {
    const body = document.querySelector("body");
    body.style.overflowY = 'scroll';
  }
}
