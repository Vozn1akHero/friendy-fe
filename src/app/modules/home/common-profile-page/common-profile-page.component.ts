import {Component, OnInit, Renderer, ElementRef, Renderer2, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CommonProfilePageService} from './services/common-profile-page.service';

import {Store, State} from '@ngrx/store';
import {Observable, Subscription, throwError} from 'rxjs';

import * as fromApp from '../../../core/ngrx/store/app.reducer';

import User from '../../../data/models/user.model';

import {catchError, map, take} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import * as UserDataActions from './store/user-data/user-data.actions';
import * as PostsActions from './store/user-posts/user-posts.actions';
import Post from '../profile-page/models/post.model';

@Component({
  selector: 'app-common-profile',
  templateUrl: './common-profile-page.component.html',
  styleUrls: ['./common-profile-page.component.scss']
})
export class CommonProfilePageComponent implements OnInit, OnDestroy {
  private _showComments : boolean = true;
  private _userId : number;
  private _userData : User;
  private userDataSubscription: Subscription;
  private activeSettings : boolean = false;

  private userData$: Observable<User>;
  private usersData$: Observable<User[]>;
  private loading$: Observable<boolean>;
  private userNotFound$: Observable<boolean>;
  private posts$: Observable<Post[]>;

  constructor(private renderer: Renderer2,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private store: Store<fromApp.AppState>,
              private commonProfilePageService: CommonProfilePageService) {
    this.activatedRoute.params.subscribe((params => {
      this._userId = params.id;
    }));

    this.getUserData();

    this.commonProfilePageService.connectToSocket();
  }

  getUserData(){
    this.loading$ = this.store.select(state => state.commonProfilePageUserData.loading);
    this.userNotFound$ = this.store.select(state => state.commonProfilePageUserData.userNotFound);
    this.usersData$ = this.store.select(state => state.commonProfilePageUserData.users);

    this.store.select(state => state.commonProfilePageUserData.users).subscribe(users => {
      if(users.length === 0){
        this.store.dispatch(new UserDataActions.GetUserStart({ id: this._userId }));
        this.usersData$.subscribe(users => {
          users.forEach(value => {
            if(value.id == this._userId){
              this._userData = value;
            }
          })
        });
      }
      else{
        users.forEach(user => {
          if(user.id === this._userId){
            this._userData = user;
          }
        });

        if(this._userData == null){
          this.store.dispatch(new UserDataActions.GetUserStart({ id: this._userId }));
          this.usersData$.subscribe(users => {
            users.forEach(value => {
              if(value.id == this._userId){
                this._userData = value;
              }
            })
          });
        }
      }
    });

    this.userNotFound$.subscribe(notFound => {
      if(notFound){
        this.router.navigate(['/404'])
      }
    })
  }

  onLikePost(id){
    this.store.dispatch(new PostsActions.LikePostStart({ id }))
  }

/*
  navigateToOwnProfilePage(){
    this.store.select(state => state.user.user).subscribe(value => {
      if(value != null && value.id == this._userId){
        this.router.navigate(['/me']);
      }
    }).unsubscribe();
  }
*/

  ngOnInit() {

  }

  ngOnDestroy(){
    //this.userDataSubscription.unsubscribe();
  }
}
