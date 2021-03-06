import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dialog-nav",
  templateUrl: "./dialog-nav.component.html",
  styleUrls: ["./dialog-nav.component.scss"]
})
export class DialogNavComponent implements OnInit {
  contactsShown: boolean = false;

  constructor() {}

  ngOnInit() {}

  showContacts() {
    this.contactsShown = true;
  }

  hideContacts() {
    this.contactsShown = false;
  }
}
