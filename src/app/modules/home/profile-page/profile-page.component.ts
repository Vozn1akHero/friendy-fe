import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import SubscriptionManager from "@app/shared/helpers/SubscriptionManager";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ScrollableListNotifierService } from "../../../shared/services/scrollable-list-notifier.service";
import { UserIdService } from "../../../shared/services/user-id.service";
import { FriendsModalComponent } from "./components/friends/friends-modal/friends-modal.component";
import { UserAvatarService } from "./services/user-avatar.service";
import { AppState } from "./store/reducers";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"],
  providers: [ScrollableListNotifierService]
})
export class ProfilePageComponent implements OnDestroy {
  activeSettings: boolean = false;
  isUserProfileOwner: boolean;
  userId: number;
  userDataLoaded$: Observable<boolean>;
  @ViewChild("userFriendsModal", { read: ViewContainerRef }) userFriendsModal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIdService,
    private store: Store<AppState>,
    private subscriptionManager: SubscriptionManager,
    private componentFactoryResolver: ComponentFactoryResolver,
    private scrollableListNotifierService: ScrollableListNotifierService,
    private avatarService: UserAvatarService
  ) {
    if (!this.route.snapshot.paramMap.get("id")) {
      this.router.navigate(["app/profile", this.userIdService.userIdValue]);
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.userId = +this.route.snapshot.params.id;
    this.isUserProfileOwner = this.userId === this.userIdService.userIdValue;
    this.userDataLoaded$ = this.store.select(
      state => state.profilePageUserData.profiles[this.userId] !== null
    );
  }

  openFriendsModal() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      FriendsModalComponent
    );
    const componentRef = this.userFriendsModal.createComponent(factory);
    componentRef.instance.userId = this.userId;
    this.subscriptionManager.add(
      componentRef.instance.closeEmitter.subscribe(() => {
        this.removeParticipantsModal();
      })
    );
    componentRef.changeDetectorRef.detectChanges();
  }

  removeParticipantsModal() {
    this.userFriendsModal.clear();
  }

  newAvatarSubmitted() {
    this.avatarService.newAvatarModalOpened = false;
  }

  updateList() {
    this.scrollableListNotifierService.notify();
  }

  ngOnDestroy() {
    this.subscriptionManager.destroy();
  }
}
