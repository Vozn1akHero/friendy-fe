import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs';
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

  constructor(private friendshipService : FriendshipService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.setFriendshipStatus();
  }

  setFriendshipStatus(){
    this.friendshipStatus$ = this.friendshipService.friendshipStatus$;
    this.loaded$ = this.friendshipService.loaded$;
    this.friendshipService.getFriendshipStatus(this.userId);
  }

  onSendFriendRequestBtnClick(){
    this.friendshipService
      .sendFriendRequest(this.userId)
      .subscribe(() => {

      })
  }

  onRemoveFriendRequestBtnClick(){
    this.friendshipService
      .removeFriendRequest(this.userId)
      .subscribe(() => {
        //this.friendRequestStatus = false;
      })
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
}
