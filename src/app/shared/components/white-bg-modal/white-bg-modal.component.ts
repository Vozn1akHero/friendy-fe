import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input
} from "@angular/core";

@Component({
  selector: "app-white-bg-modal",
  templateUrl: "./white-bg-modal.component.html",
  styleUrls: ["./white-bg-modal.component.scss"]
})
export class WhiteBgModalComponent implements OnInit {
  @ViewChild("commonModal") commonModal;
  @Output() closeEmitter: EventEmitter<void> = new EventEmitter();
  @Input() contentCentered: boolean = false;
  @Input() title: string;

  ngOnInit() {
    const body = document.querySelector("body");
    body.style.overflowY = "hidden";
    const y = window.scrollY;
    this.commonModal.nativeElement.style.top = y + "px";
    window.scrollTo({
      top: y
    });
  }

  ngOnDestroy(): void {
    const body = document.querySelector("body");
    body.style.overflowY = "scroll";
  }

  closePopup() {
    this.closeEmitter.emit();
  }
}
