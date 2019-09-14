import {Component, OnInit, Renderer, ElementRef, Renderer2, OnChanges, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProfilePageService} from './services/profile-page.service';

import {Store, State} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromApp from '../../../core/ngrx/store/app.reducer';
import * as UserActions from '../../../core/ngrx/common/store/user.actions';
import User from '../../../data/schema/user';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnChanges {
  private _myProfile : boolean = true;
  private _activeSettings : boolean = false;
  private _showComments : boolean = true;

  private _userData;

  private userData$: Observable<User>;
  private loading$: Observable<boolean>;

  newPost : FormGroup = new FormGroup({
    newMessageContent: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
    image: new FormControl('')
  });
  
  constructor(private renderer: Renderer2,
              private store: Store<fromApp.AppState>,
              private state: State<fromApp.AppState>,
              private pageService: ProfilePageService) {
    this.userData$ = this.store.select(state => state.user.user);
    this.loading$ = this.store.select(state => state.user.loading);

    this.store.dispatch(new UserActions.GetUserStart());

    this.userData$.subscribe(value => {
      console.log(value)
      this._userData = value;
    });
  }

  getUserData(){
    this.userData$.subscribe(value => {
      this._userData = value;
    });
  }

  ngOnInit() {
    this.pageService.connectToSocket();

    this.getUserData();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
