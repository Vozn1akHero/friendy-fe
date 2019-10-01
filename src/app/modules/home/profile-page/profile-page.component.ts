import {Component, OnInit, Renderer, ElementRef, Renderer2, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProfilePageService} from './services/profile-page.service';

import {Store, State} from '@ngrx/store';
import {combineLatest, merge, Observable, of, Subscription} from 'rxjs';

import * as fromApp from '../../../core/ngrx/store/app.reducer';
//import * as UserActions from '../../../core/ngrx/user/user.actions';
import * as UserDataActions from './store/user-data/user-data.actions';
import * as UserPostsActions from './store/user-posts/user-posts.actions';
import * as UserAvatarActions from './store/user-avatar/user-avatar.actions';

import User from './models/user.model';
import * as moment from 'moment';
import Post from './models/post.model';
import {ExemplaryFriend} from './models/exemplary-friend.model';
import UserAvatar from './models/user-avatar.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnChanges, OnDestroy {
  activeSettings : boolean = false;
  showComments : boolean = true;
  pageLoading: boolean;
  loadingSubscription: Subscription;

  userData: User;
  userMDLoading$: Observable<boolean>;
  userDataSubscription: Subscription;

  userPosts: Post[];
  userPostsSubscription: Subscription;
  userPostsLoading$: Observable<boolean>;
  //posts$: Observable<Post[]>;

  exemplaryFriends: ExemplaryFriend[];
  exemplaryFriendsSubscription: Subscription;
  exemplaryFriendsLoading$: Observable<boolean>;

  //user avatar
  //userAvatar$: Observable<UserAvatar>;
  userAvatar: UserAvatar;
  userAvatarSubscription: Subscription;
  userAvatarLoading$: Observable<boolean>;

/*  newPost : FormGroup = new FormGroup({
    newMessageContent: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
    image: new FormControl('')
  });*/

  constructor(private renderer: Renderer2,
              private store: Store<fromApp.AppState>,
              private state: State<fromApp.AppState>,
              private pageService: ProfilePageService) {}


  ngOnInit() {
    this.loadingSubscription = combineLatest(
      this.store.select(state => state.profilePageUserData.loading),
      this.store.select(state => state.profilePageUserPosts.loading),
      this.store.select(state => state.profilePageUserAvatar.loading),
    ).subscribe(([userMdLoading, userPostsLoading, userAvatarLoading]) => {
      this.pageLoading = userMdLoading && userPostsLoading && userAvatarLoading;
    });
    /*this.userMDLoading$ = this.store.select(state => state.profilePageUserData.loading);
    this.userPostsLoading$ = this.store.select(state => state.profilePageUserPosts.loading);
    //this.exemplaryFriendsLoading$ = this.store.select(state => state.profilePageUserExemplaryFriends.loading);
    this.userAvatarLoading$ = this.store.select(state => state.profilePageUserAvatar.loading);*/

    this.getUserAvatar();
    this.getUserData();
    this.getUserPosts();

    this.pageService.connectToSocket();
  }

  getUserData(){
    this.store.dispatch(new UserDataActions.GetUserData());
    this.userDataSubscription = this.store
      .select(state => state.profilePageUserData.user)
      .subscribe(userData => {
        this.userData = userData;
      });
  }

  getUserPosts() {
    this.store.dispatch(new UserPostsActions.GetUserPostsStart());
    this.userPostsSubscription = this.store
      .select(state => state.profilePageUserPosts.posts)
      .subscribe(userPosts => {
        this.userPosts = userPosts;
      })
  }

  getUserAvatar() {
    this.store.dispatch(new UserAvatarActions.GetUserAvatar());
    this.userAvatarSubscription = this.store
      .select(state => state.profilePageUserAvatar.avatar)
      .subscribe(userAvatar => {
        this.userAvatar = userAvatar;
      })
  }

  onNewPost(newPost : FormGroup):void{
    const post : Post = {
      content: newPost.value.newMessageContent,
      image: newPost.value.image
    };

    this.store.dispatch(new UserPostsActions.AddPost(post));
  }

  onRemovePost(id){
    this.store.dispatch(new UserPostsActions.RemovePostStart({ id }))
  }

  onLikePost(id){
    this.store.dispatch(new UserPostsActions.LikePostStart({ id }))
  }

  onUnlikePost(id){
    this.store.dispatch(new UserPostsActions.UnlikePostStart({ id }))
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
    this.userPostsSubscription.unsubscribe();
    //this.exemplaryFriendsSubscription.unsubscribe();
    this.userAvatarSubscription.unsubscribe();
    //if(this.userAvatarSubscription != null) this.userAvatarSubscription.unsubscribe();
  }
}
