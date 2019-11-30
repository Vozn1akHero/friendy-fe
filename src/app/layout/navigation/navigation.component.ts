import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import {UserIdService} from '../../shared/services/user-id.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() friendRequestModalOpened:boolean;
  @Output() openFriendRequestsModalEmitter: EventEmitter<void> = new EventEmitter();
  @Output() closeFriendRequestsModalEmitter: EventEmitter<void> = new EventEmitter();
  profileId$: Observable<number>;

  constructor(private router: Router,
              private userIdService : UserIdService,
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
    this.profileId$ = this.userIdService.userId$;
  }

  logOut():void{
    this.authService.logOut();
  }
}
