import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../core/ngrx/store/app.reducer';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() friendRequestModalOpened:boolean;
  @Output() openFriendRequestsModalEmitter: EventEmitter<void> = new EventEmitter();
  @Output() closeFriendRequestsModalEmitter: EventEmitter<void> = new EventEmitter();

  profileId: number;

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit() {
    this.setProfileId();
  }

  toggleFriendRequestsModal(){
    if(this.friendRequestModalOpened){
      this.closeFriendRequestsModalEmitter.emit();
    } else{
      this.openFriendRequestsModalEmitter.emit();
    }
  }

  setProfileId(){
    this.profileId = +Cookies.get('pid');
  }

  logOut():void{
    this.authService.logOut();
  }
}
