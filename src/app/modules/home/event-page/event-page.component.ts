import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import SubscriptionManager from "src/app/shared/helpers/SubscriptionManager";
import { ScrollableListNotifierService } from "../../../shared/services/scrollable-list-notifier.service";
import { ParticipantsModalComponent } from "./components/participants-modal/participants-modal.component";
import { EventPostService } from "./services/event-post.service";
import { OpenSettingsService } from "./services/open-settings.service";

@Component({
  selector: "app-event",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.scss"],
  providers: [ScrollableListNotifierService, EventPostService]
})
export class EventComponent implements OnInit, OnDestroy {
  isEventAdmin: boolean;
  eventId: number;
  activeSettings: boolean = false;
  participantsModalOpened: boolean;
  @ViewChild("participantsModal", { read: ViewContainerRef }) participantsModal;

  constructor(
    private route: ActivatedRoute,
    private subscriptionManager: SubscriptionManager,
    private componentFactoryResolver: ComponentFactoryResolver,
    private scrollableListNotifierService: ScrollableListNotifierService,
    private openSettingsService: OpenSettingsService
  ) {}

  ngOnInit() {
    this.eventId = +this.route.snapshot.paramMap.get("id");
    this.isEventAdmin = this.route.snapshot.data.isEventAdmin;
    this.subscriptionManager.add(
      this.openSettingsService.openedSettingsValueChanged$.subscribe(value => {
        this.activeSettings = value;
      })
    );
  }

  openParticipantsModal() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      ParticipantsModalComponent
    );
    const componentRef = this.participantsModal.createComponent(factory);
    componentRef.instance.eventId = this.eventId;
    this.subscriptionManager.add(
      componentRef.instance.closeModalEmitter.subscribe(() => {
        this.removeParticipantsModal();
      })
    );
    componentRef.changeDetectorRef.detectChanges();
  }

  removeParticipantsModal() {
    this.participantsModal.clear();
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }

  updateList() {
    this.scrollableListNotifierService.notify();
  }
}
