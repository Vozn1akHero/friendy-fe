import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FriendModel } from "../../../models/friend.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/reducers";
import * as ContactsActions from "../../../store/contacts/contacts.actions";
import { Router } from "@angular/router";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  contacts$: Observable<FriendModel[]>;
  contactsLoaded$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.store.dispatch(new ContactsActions.GetContacts({ page: 1 }));
    this.contacts$ = this.store.select(e => e.fromDialogPageContacts.contacts);
    this.contactsLoaded$ = this.store.select(
      e => e.fromDialogPageContacts.loaded
    );
  }

  redirectToDialog(id: number) {
    this.router.navigate(["/app/dialog/", id]);
  }
}
