import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { UserIdService } from "../../shared/services/user-id.service";
import { UserStatusService } from "./services/user-status.service";
import SubscriptionManager from "../../shared/helpers/SubscriptionManager";
import { FullScreenImageService } from "../../shared/services/full-screen-image.service";

@Component({
  selector: "app-wrapper",
  templateUrl: "./wrapper.component.html",
  styleUrls: ["./wrapper.component.scss"]
})
export class WrapperComponent implements OnInit, OnDestroy {
  userIdLoaded$: Observable<boolean>;
  userId$: Observable<number>;
  connectedToStatusHub: boolean = false;
  receivedFriendRequestsAmount: number;
  fullScreenImageModalVisible$: Observable<boolean>;
  photoEditorVisible$: Observable<boolean>;

  constructor(
    private userStatusService: UserStatusService,
    private subscriptionManager: SubscriptionManager,
    private userIdService: UserIdService,
    private fullScreenImageService: FullScreenImageService
  ) {}

  ngOnInit() {
    this.userIdService.getUserId();
    this.userIdLoaded$ = this.userIdService.loaded$;
    this.userId$ = this.userIdService.userId$;
    this.setConnectedStatus();
    this.fullScreenImageModalVisible$ = this.fullScreenImageService.visible$;
  }

  setConnectedStatus() {
    this.subscriptionManager.add(
      this.userId$.subscribe(value => {
        if (value != null) {
          this.subscriptionManager.add(
            this.userStatusService.connected$.subscribe(connected => {
              if (connected) {
                this.userStatusService.setConnectedState(value);
              }
            })
          );
          this.subscriptionManager.add(
            this.userStatusService.connectedMethodExecuted$.subscribe(value => {
              this.connectedToStatusHub = value;
            })
          );
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
