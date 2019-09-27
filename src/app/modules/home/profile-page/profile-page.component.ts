import {Component, OnInit, Renderer, ElementRef, Renderer2, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProfilePageService} from './services/profile-page.service';

import {Store, State} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';

import * as fromApp from '../../../core/ngrx/store/app.reducer';
//import * as UserActions from '../../../core/ngrx/user/user.actions';
import * as UserDataActions from './store/user-data/user-data.actions';
import * as UserPostsActions from './store/user-posts/user-posts.actions';

import User from '../../../data/models/user.model';
import * as moment from 'moment';
import Post from './models/post.model';
import {ExemplaryFriend} from './models/exemplary-friend.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnChanges, OnDestroy {
  private activeSettings : boolean = false;
  private _showComments : boolean = true;

  posts : Post[];
  userData: User;

  private userData$: Observable<User>;
  private userMDLoading$: Observable<boolean>;
  private userPostsLoading$: Observable<boolean>;
  private posts$: Observable<Post[]>;

  private exemplaryFriends: ExemplaryFriend[];
  private exemplaryFriendsSubscription: Subscription;
  private exemplaryFriendsLoading$: Observable<boolean>;

  newPost : FormGroup = new FormGroup({
    newMessageContent: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
    image: new FormControl('')
  });

  
  constructor(private renderer: Renderer2,
              private store: Store<fromApp.AppState>,
              private state: State<fromApp.AppState>,
              private pageService: ProfilePageService) {}


  ngOnInit() {
    this.userMDLoading$ = this.store.select(state => state.profilePageUserData.loading);
    this.userPostsLoading$ = this.store.select(state => state.profilePageUserPosts.loading);
    this.exemplaryFriendsLoading$ = this.store.select(state => state.profilePageUserExemplaryFriends.loading);

    this.userData$ = this.store.select(state => state.profilePageUserData.user);
    this.posts$ = this.store.select(state => state.profilePageUserPosts.posts);

    this.exemplaryFriendsSubscription = this.store.select(state => state.profilePageUserExemplaryFriends.exemplaryFriends)
      .subscribe(exemplaryFriends => {
        this.exemplaryFriends = exemplaryFriends;
    });
/*

    this.posts$.subscribe(posts => {
      console.log(posts)
    })
*/
    this.getUserData();
    this.getUserPosts();

    this.pageService.connectToSocket();
  }

  getUserData(){
    this.store.dispatch(new UserDataActions.GetUserDataStart());
    this.userData$.subscribe(user => {
      this.userData = user;
    })
  }

  getUserPosts() {
    this.store.dispatch(new UserPostsActions.GetUserPostsStart());
  }

  onNewPost(newPost : FormGroup):void{
    const post : Post = {
      content: newPost.value.newMessageContent,
      image: newPost.value.image
    };

    this.store.dispatch(new UserPostsActions.AddPostStart(post));
  }

  onRemovePost(id){
    this.store.dispatch(new UserPostsActions.RemovePostStart({ id }))
  }

  onLikePost(id){
    this.store.dispatch(new UserPostsActions.LikePostStart({ id }))
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    if(this.exemplaryFriendsSubscription != null) this.exemplaryFriendsSubscription.unsubscribe();
  }
}
