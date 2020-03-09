import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Observable, of} from 'rxjs';
import {FriendshipService} from '../../../services/friendship.service';
import {ButtonHoverInfoPopoverComponent} from '../../../../../../shared/components/button-hover-info-popover/button-hover-info-popover.component';

@Component({
  selector: 'app-profile-header-friendship-controls',
  templateUrl: './profile-header-friendship-controls.component.html',
  styleUrls: ['./profile-header-friendship-controls.component.scss']
})
export class ProfileHeaderFriendshipControlsComponent implements OnInit {
  @Input() userId: number;
  loaded$: Observable<boolean>;
  friendshipStatus$: Observable<number>;
  @ViewChild('removeRequestPopoverRef', {read: ViewContainerRef}) removeRequestPopoverRef;
  @ViewChild('sendRequestPopoverRef', {read: ViewContainerRef}) sendRequestPopoverRef;
  @ViewChild('removeReceivedRequestPopoverRef', {read: ViewContainerRef}) removeReceivedRequestPopoverRef;

  constructor(private friendshipService : FriendshipService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.friendshipService.getFriendshipStatus(this.userId);
    this.friendshipStatus$ = this.friendshipService.friendshipStatus$;
    this.loaded$ = this.friendshipService.loaded$;
  }

  onSendFriendRequestBtnClick(){
    this.friendshipService
      .sendFriendRequest(this.userId)
  }

  onRemoveFriendRequestBtnClick(){
    this.friendshipService
      .removeFriendRequest(this.userId)
  }

  showRequestPopover() : void {
    if(this.removeRequestPopoverRef.length===0) {
      const factory = this.componentFactoryResolver
        .resolveComponentFactory(ButtonHoverInfoPopoverComponent);
      const componentRef = this.removeRequestPopoverRef.createComponent(factory);
      componentRef.instance.text = "Anuluj prośbę o dodanie do znajomych";
      componentRef.changeDetectorRef.detectChanges();
    }
  }

  removeRequestPopover() : void {
    this.removeRequestPopoverRef.clear();
  }

  showSendRequestPopover(){
    if(this.sendRequestPopoverRef.length===0){
      const factory = this.componentFactoryResolver
        .resolveComponentFactory(ButtonHoverInfoPopoverComponent);
      const componentRef = this.sendRequestPopoverRef.createComponent(factory);
      componentRef.instance.text = "Dodaj do znajomych";
      componentRef.changeDetectorRef.detectChanges();
    }
  }

  removeSendRequestPopover(){
    this.sendRequestPopoverRef.clear();
  }

  onConfirmReceivedRequestBtnClick() {
    this.friendshipService.confirmFriendRequest(this.userId)
  }

  removeConfirmReceivedRequestPopover() {
    this.removeReceivedRequestPopoverRef.clear();
  }

  showConfirmReceivedRequestPopover() {
    if(this.removeReceivedRequestPopoverRef.length===0){
      const factory = this.componentFactoryResolver
        .resolveComponentFactory(ButtonHoverInfoPopoverComponent);
      const componentRef = this.removeReceivedRequestPopoverRef.createComponent(factory);
      componentRef.instance.text = "Zatwierdź wniosek";
      componentRef.changeDetectorRef.detectChanges();
    }
  }
}
