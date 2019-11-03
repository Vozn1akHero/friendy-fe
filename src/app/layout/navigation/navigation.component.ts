import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../core/ngrx/store/app.reducer';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() friendRequestModalOpened:boolean;
  @Output() openFriendRequestsModalEmitter: EventEmitter<void> = new EventEmitter();
  @Output() closeFriendRequestsModalEmitter: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit() {}

  toggleFriendRequestsModal(){
    if(this.friendRequestModalOpened){
      this.closeFriendRequestsModalEmitter.emit();
    } else{
      this.openFriendRequestsModalEmitter.emit();
    }
  }

  logOut():void{
    this.authService.logOut();
  }
}
