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
import * as UserExemplaryFriends from './store/user-exemplary-friends/user-exemplary-friends.actions';

import User from './models/user.model';
import * as moment from 'moment';
import Post from './models/post.model';
import ExemplaryFriend from './models/exemplary-friend.model';
import UserAvatar from './models/user-avatar.model';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

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

/*  userData: User;
  userDataLoaded: boolean;
  userDataSubscription: Subscription;*/

  userPosts: Post[];
  userPostsLoaded: boolean;
  userPostsSubscription: Subscription;

/*  exemplaryFriends: ExemplaryFriend[];
  exemplaryFriendsLoaded: boolean;
  exemplaryFriendsSubscription: Subscription;*/

/*  userAvatar: UserAvatar;
  userAvatarLoaded: boolean;
  userAvatarSubscription: Subscription;*/

/*  newPost : FormGroup = new FormGroup({
    newMessageContent: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
    image: new FormControl('')
  });*/

  constructor(private renderer: Renderer2,
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState>,
              private pageService: ProfilePageService) {
    console.log(this.route.snapshot.data.profileBelongingStatus)
  }


  ngOnInit() {
    /*this.loadingSubscription = combineLatest(
      this.store.select(state => state.profilePageUserData.loaded),
      this.store.select(state => state.profilePageUserAvatar.loaded),
      this.store.select(state => state.profilePageUserExemplaryFriends.loaded)
    ).subscribe(([userDataLoading, userAvatarLoaded, exemplaryFriendsLoaded]) => {
      //this.pageLoading = userDataLoading && userPostsLoading && userAvatarLoading;
      //this.userDataLoaded = userDataLoading;
      //this.userAvatarLoaded = userAvatarLoaded;
      //this.exemplaryFriendsLoaded = exemplaryFriendsLoaded;
    });

    //this.getUserAvatar();
    //this.getUserData();
    //this.getUserPosts();
    //this.getExemplaryFriends();*/

    this.pageService.connectToSocket();
  }

/*  getUserData(){
    this.userDataSubscription = this.store
      .select(state => state.profilePageUserData.user)
      .subscribe(userData => {
        this.userData = userData;
      });
  }*/

/*  getUserPosts() {
    this.store.dispatch(new UserPostsActions.GetUserPosts());
    this.userPostsSubscription = this.store
      .select(state => state.profilePageUserPosts.posts)
      .subscribe(userPosts => {
        this.userPosts = userPosts;
      })
  }*/

/*  getUserAvatar() {
    this.store.dispatch(new UserAvatarActions.GetUserAvatar());
    this.userAvatarSubscription = this.store
      .select(state => state.profilePageUserAvatar.avatar)
      .subscribe(userAvatar => {
        this.userAvatar = userAvatar;
      })
  }*/

/*  getExemplaryFriends(){
    this.store.dispatch(new UserExemplaryFriends.GetExemplaryFriends());
    this.exemplaryFriendsSubscription = this.store
      .select(state => state.profilePageUserExemplaryFriends.exemplaryFriends)
      .subscribe(exemplaryFriends => {
        this.exemplaryFriends = exemplaryFriends;
      })
  }*/

  /*onNewPost(newPost : FormGroup):void{
    const post : Post = {
      content: newPost.value.newMessageContent,
      image: newPost.value.image
    };

    this.store.dispatch(new UserPostsActions.AddPost(post));
  }

  onRemovePost(id){
    this.store.dispatch(new UserPostsActions.RemovePost({ id }))
  }

  onLikePost(id){
    this.store.dispatch(new UserPostsActions.LikePostStart({ id }))
  }

  onUnlikePost(id){
    this.store.dispatch(new UserPostsActions.UnlikePostStart({ id }))
  }*/

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    //this.userDataSubscription.unsubscribe();
    //this.exemplaryFriendsSubscription.unsubscribe();
    //this.userAvatarSubscription.unsubscribe();
  }
}
