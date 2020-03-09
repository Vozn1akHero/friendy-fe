import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss']
})
export class CommonModalComponent implements OnInit, OnDestroy {
  @ViewChild("commonModal") commonModal;
  @Output() closeEmitter: EventEmitter<void>;

  constructor() {
    this.closeEmitter = new EventEmitter();
  }

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

  closePopup() {
    this.closeEmitter.emit();
  }
}
