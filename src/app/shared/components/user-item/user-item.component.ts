import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ButtonHoverInfoPopoverComponent } from "../button-hover-info-popover/button-hover-info-popover.component";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.scss"]
})
export class UserItemComponent implements OnInit {
  @ViewChild("removeRequestPopoverRef", { read: ViewContainerRef })
  removeRequestPopoverRef;
  @ViewChild("sendRequestPopoverRef", { read: ViewContainerRef })
  sendRequestPopoverRef;
  @Output() sendFriendRequestEmitter: EventEmitter<number> = new EventEmitter();
  @Output() removeFriendRequestEmitter: EventEmitter<
    number
  > = new EventEmitter();
  @Output() removeFriendEmitter: EventEmitter<number> = new EventEmitter();
  @Input() name: string;
  @Input() surname: string;
  @Input() id: number;
  @Input() friendRequestId: number;
  @Input() city: string;
  @Input() avatar: string;
  @Input() friendshipStatusIndex: number;
  @Input() isUserOnline: boolean;
  @Input() styles;
  @ViewChild("menu") menu;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  removeFriend() {
    this.removeFriendEmitter.emit(this.id);
  }

  onSendFriendRequestBtnClick() {
    this.sendFriendRequestEmitter.emit(this.id);
  }

  onRemoveFriendRequestBtnClick() {
    this.removeFriendRequestEmitter.emit(this.friendRequestId);
  }

  showRequestPopover(): void {
    if (this.removeRequestPopoverRef.length === 0) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        ButtonHoverInfoPopoverComponent
      );
      const componentRef = this.removeRequestPopoverRef.createComponent(
        factory
      );
      componentRef.instance.text = "Anuluj prośbę o dodanie do znajomych";
      componentRef.changeDetectorRef.detectChanges();
    }
  }

  removeRequestPopover(): void {
    this.removeRequestPopoverRef.clear();
  }

  showSendRequestPopover() {
    if (this.sendRequestPopoverRef.length === 0) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        ButtonHoverInfoPopoverComponent
      );
      const componentRef = this.sendRequestPopoverRef.createComponent(factory);
      componentRef.instance.text = "Dodaj do znajomych";
      componentRef.changeDetectorRef.detectChanges();
    }
  }

  removeSendRequestPopover() {
    this.sendRequestPopoverRef.clear();
  }

  toogleMenu() {
    this.menu.nativeElement.style.display =
      this.menu.nativeElement.style.display === "block" ? "none" : "block";
  }
}
