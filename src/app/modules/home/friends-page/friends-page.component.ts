import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {State, Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import * as UserFriendsActions from './store/user-friends/user-friends.actions';
import {ActivatedRoute} from '@angular/router';
import {FriendsService} from './services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit {


  constructor(private renderer: Renderer2,
              private friendsPageService: FriendsService,
              private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {

  }
}
