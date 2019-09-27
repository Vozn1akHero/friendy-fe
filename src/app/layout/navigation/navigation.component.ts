import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../core/ngrx/store/app.reducer';

@Component({
  selector: 'app-wholeness',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private authServiceSubscription : Subscription;
  private storeUserSubscription : Subscription;

  constructor(private router: Router,
              private store: Store<fromApp.AppState>,
              private authService: AuthService) {

  }

  ngOnInit() {
    //this.store.dispatch(new UserActions.GetUserStart());
  }

  logOut():void{
    this.authService.logOut();
  }

}
