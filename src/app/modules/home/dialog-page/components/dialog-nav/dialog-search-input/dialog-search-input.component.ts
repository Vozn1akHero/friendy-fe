import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-dialog-search-input",
  templateUrl: "./dialog-search-input.component.html",
  styleUrls: ["./dialog-search-input.component.scss"]
})
export class DialogSearchInputComponent implements OnInit {
  @Output() showContactsEmitter: EventEmitter<void> = new EventEmitter();
  @Output() hideContactsEmitter: EventEmitter<void> = new EventEmitter();
  value: string = "";

  ngOnInit() {
    document.addEventListener("click", this.hideContacts.bind(this));
  }

  showContacts() {
    if (this.value.length == 0) this.showContactsEmitter.emit();
  }

  hideContacts(e) {
    const el = e.target as HTMLElement;
    console.log(el.classList);
    if (
      !el.classList.contains("contact") &&
      !el.classList.contains("dialog-search-input")
    ) {
      if (this.value.length == 0) {
        document.removeEventListener("click", this.hideContacts);
        this.hideContactsEmitter.emit();
      }
    }
  }
}
