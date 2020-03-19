import { UserAvatarService } from "./../../services/user-avatar.service";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../../../core/ngrx/store/app.reducer";
import * as UserAvatarActions from "../../store/user-avatar/user-avatar.actions";

@Component({
  selector: "app-new-avatar-modal",
  templateUrl: "./new-avatar-modal.component.html",
  styleUrls: ["./new-avatar-modal.component.scss"]
})
export class NewAvatarModalComponent implements OnInit {
  @Input() newAvatar: File;
  @Output() newAvatarSubmitted: EventEmitter<void> = new EventEmitter();
  newAvatarBytesLoaded: boolean = false;
  newAvatarBytes: SafeResourceUrl;

  constructor(
    private _sanitizer: DomSanitizer,
    private avatarService: UserAvatarService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.newAvatarBytes = this._sanitizer.bypassSecurityTrustResourceUrl(
        String(reader.result)
      );
      this.newAvatarBytesLoaded = true;
    };
    reader.readAsDataURL(this.newAvatar);
  }

  updateAvatarSubmit() {
    this.store.dispatch(new UserAvatarActions.UpdateUserAvatar(this.newAvatar));
    this.newAvatarSubmitted.emit();
  }

  closeModal() {
    this.avatarService.newAvatar = null;
    this.avatarService.newAvatarModalOpened = false;
  }
}
