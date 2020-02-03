import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-scrollable-list',
  templateUrl: './scrollable-list.component.html',
  styleUrls: ['./scrollable-list.component.scss']
})
export class ScrollableListComponent implements OnInit, AfterViewInit {
  finished: boolean;
  listHeight: number;
  @ViewChild('scrollableList') scrollableList: ElementRef;
  @Output() onMiddleReaching: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.finished = false;
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.listHeight = this.scrollableList.nativeElement.offsetHeight;
  }

  onScroll($event : WheelEvent) {
    if($event.deltaY > 0 && $event.pageY > this.listHeight / 2){
      this.listHeight = this.scrollableList.nativeElement.offsetHeight;
      this.onMiddleReaching.emit();
    }
  }
}
